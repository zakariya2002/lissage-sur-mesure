import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { sendOrderNotification } from "@/lib/email";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    console.error("[webhook] signature invalid", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: [
          "line_items",
          "shipping_cost.shipping_rate",
          "total_details.breakdown",
        ],
      });

      const lineItem = fullSession.line_items?.data[0];
      const productName =
        (fullSession.metadata?.productName as string | undefined) ||
        lineItem?.description ||
        "Produit";

      const shippingDetails = fullSession.collected_information?.shipping_details;
      const addr = shippingDetails?.address;
      const shippingAddress = addr
        ? [
            shippingDetails?.name,
            addr.line1,
            addr.line2,
            `${addr.postal_code ?? ""} ${addr.city ?? ""}`.trim(),
            addr.country,
          ]
            .filter(Boolean)
            .join("\n")
        : "Adresse non communiquée";

      const shippingRate = fullSession.shipping_cost?.shipping_rate;
      const shippingMethod =
        typeof shippingRate === "object" && shippingRate
          ? shippingRate.display_name ?? "Livraison"
          : "Livraison";

      // Décomposition du paiement (montants en centimes).
      // - amount_subtotal : sous-total HT (hors TVA, hors livraison)
      // - total_details.amount_tax : TVA appliquée
      // - shipping_cost.amount_total : frais de livraison TTC
      // - amount_total : total payé TTC
      const amountTotal = fullSession.amount_total ?? 0;
      const amountTax = fullSession.total_details?.amount_tax ?? 0;
      const amountShipping = fullSession.shipping_cost?.amount_total ?? 0;
      const amountSubtotal =
        fullSession.amount_subtotal ?? Math.max(0, amountTotal - amountTax - amountShipping);
      const currency = fullSession.currency ?? "eur";

      await sendOrderNotification({
        customerEmail: fullSession.customer_details?.email ?? "inconnu",
        customerName: fullSession.customer_details?.name ?? "Inconnu",
        customerPhone: fullSession.customer_details?.phone ?? "Non renseigné",
        productName,
        quantity: lineItem?.quantity ?? 1,
        shippingMethod,
        shippingAddress,
        amountSubtotal,
        amountTax,
        amountShipping,
        amountTotal,
        currency,
        orderId: fullSession.id,
      });
    } catch (err) {
      // On log mais on retourne 200 pour éviter que Stripe re-déclenche en boucle
      // (un email raté n'est pas critique — il peut être renvoyé manuellement
      // depuis le Dashboard Stripe → Events → Resend).
      console.error("[webhook] email send failed", err);
      return NextResponse.json({ received: true, warning: "email failed" });
    }
  }

  return NextResponse.json({ received: true });
}

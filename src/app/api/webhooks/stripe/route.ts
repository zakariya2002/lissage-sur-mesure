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
        expand: ["line_items", "shipping_cost.shipping_rate"],
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

      await sendOrderNotification({
        customerEmail: fullSession.customer_details?.email ?? "inconnu",
        customerName: fullSession.customer_details?.name ?? "Inconnu",
        customerPhone: fullSession.customer_details?.phone ?? "Non renseigné",
        productName,
        quantity: lineItem?.quantity ?? 1,
        shippingMethod,
        shippingAddress,
        amountTotal: fullSession.amount_total ?? 0,
        orderId: fullSession.id,
      });
    } catch (err) {
      console.error("[webhook] email send failed", err);
      // On retourne 200 pour ne pas que Stripe re-trigger en boucle.
      // L'erreur est loggée — on peut ré-envoyer manuellement depuis le Dashboard.
      return NextResponse.json({ received: true, warning: "email failed" });
    }
  }

  return NextResponse.json({ received: true });
}

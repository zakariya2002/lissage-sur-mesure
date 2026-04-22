import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductById, getStripePriceId } from "@/lib/products";

export async function POST(request: Request) {
  try {
    const { productId, quantity = 1 } = await request.json();

    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: "Quantité invalide" }, { status: 400 });
    }

    const priceId = getStripePriceId(product);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity }],
      locale: "fr",

      shipping_address_collection: { allowed_countries: ["FR"] },
      phone_number_collection: { enabled: true },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 790, currency: "eur" },
            display_name: "Colissimo Standard (3-5 jours)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 1290, currency: "eur" },
            display_name: "Colissimo Express (1-2 jours)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 2 },
            },
          },
        },
      ],

      metadata: {
        productId: product.id,
        productName: product.nom,
      },

      success_url: `${siteUrl}/commande/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/commande/annulee`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout]", error);
    const message = error instanceof Error ? error.message : "Erreur interne";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

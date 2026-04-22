import { Resend } from "resend";

let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY missing in environment");
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

interface OrderEmailParams {
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  quantity: number;
  shippingMethod: string;
  shippingAddress: string;
  amountTotal: number;
  orderId: string;
}

export async function sendOrderNotification(params: OrderEmailParams) {
  const to = process.env.ORDER_NOTIFICATION_EMAIL;
  const from = process.env.ORDER_FROM_EMAIL;

  if (!to || !from) {
    throw new Error("ORDER_NOTIFICATION_EMAIL or ORDER_FROM_EMAIL missing");
  }

  const total = (params.amountTotal / 100).toFixed(2);

  return getResend().emails.send({
    from: `Lissage sur Mesure <${from}>`,
    to,
    replyTo: params.customerEmail,
    subject: `Nouvelle commande — ${params.productName} (${total} €)`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
        <h1 style="font-size: 20px; margin: 0 0 24px; padding-bottom: 16px; border-bottom: 1px solid #e5e5e5;">
          Nouvelle commande
        </h1>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin: 24px 0 8px;">Produit</h2>
        <p style="margin: 0; font-size: 16px;">
          <strong>${params.productName}</strong> × ${params.quantity}<br/>
          <span style="color: #666;">Montant total : <strong>${total} €</strong></span>
        </p>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin: 24px 0 8px;">Client</h2>
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
          ${params.customerName}<br/>
          <a href="mailto:${params.customerEmail}" style="color: #1a1a1a;">${params.customerEmail}</a><br/>
          ${params.customerPhone}
        </p>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin: 24px 0 8px;">Livraison</h2>
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
          <strong>${params.shippingMethod}</strong><br/>
          <span style="white-space: pre-line;">${params.shippingAddress}</span>
        </p>

        <p style="margin: 32px 0 0; font-size: 12px; color: #999;">
          Commande Stripe : ${params.orderId}
        </p>
      </div>
    `,
  });
}

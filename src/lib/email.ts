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

export interface OrderEmailParams {
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  quantity: number;
  shippingMethod: string;
  shippingAddress: string;
  /** Sous-total HT en centimes (hors TVA, hors livraison) */
  amountSubtotal: number;
  /** Montant TVA en centimes */
  amountTax: number;
  /** Frais de livraison en centimes */
  amountShipping: number;
  /** Total TTC payé en centimes */
  amountTotal: number;
  currency: string;
  orderId: string;
}

const BORDEAUX = "#5b1822";
const NOIR = "#1a1410";
const TEXTE_MUTED = "#7a6f68";
const BORDURE = "#e8e2dc";
const FOND_DOUX = "#faf7f4";

function formatAmount(cents: number, currency: string): string {
  const value = cents / 100;
  try {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${value.toFixed(2)} ${currency.toUpperCase()}`;
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(params: OrderEmailParams): string {
  const subtotal = formatAmount(params.amountSubtotal, params.currency);
  const tax = formatAmount(params.amountTax, params.currency);
  const shipping = formatAmount(params.amountShipping, params.currency);
  const total = formatAmount(params.amountTotal, params.currency);

  const addressLines = escapeHtml(params.shippingAddress).replace(/\n/g, "<br/>");
  const shippingLabel = params.amountShipping === 0 ? "Offerte" : shipping;

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nouvelle commande</title>
  </head>
  <body style="margin:0; padding:0; background:${FOND_DOUX}; color:${NOIR}; font-family: 'Georgia', 'Times New Roman', serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${FOND_DOUX}; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px; background:#ffffff; border:1px solid ${BORDURE}; border-top:3px solid ${BORDEAUX};">
            <tr>
              <td style="padding:40px 40px 24px;">
                <p style="margin:0; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:${BORDEAUX}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Lissage sur Mesure
                </p>
                <h1 style="margin:12px 0 0; font-size:24px; font-weight:400; color:${NOIR}; font-family:'Georgia', 'Times New Roman', serif; letter-spacing:0.01em;">
                  Nouvelle commande à expédier
                </h1>
                <p style="margin:8px 0 0; font-size:13px; color:${TEXTE_MUTED}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Paiement confirmé via Stripe.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px;">
                <hr style="border:none; border-top:1px solid ${BORDURE}; margin:0;" />
              </td>
            </tr>

            <tr>
              <td style="padding:28px 40px 8px;">
                <p style="margin:0 0 12px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${BORDEAUX}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Produit commandé
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-size:16px; color:${NOIR};">
                      <strong style="font-weight:600;">${escapeHtml(params.productName)}</strong>
                    </td>
                    <td align="right" style="font-size:14px; color:${TEXTE_MUTED}; font-family:'Helvetica Neue', Arial, sans-serif;">
                      Quantité&nbsp;: <strong style="color:${NOIR};">${params.quantity}</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 40px 8px;">
                <p style="margin:0 0 12px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${BORDEAUX}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Détail du paiement
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family:'Helvetica Neue', Arial, sans-serif; font-size:14px;">
                  <tr>
                    <td style="padding:6px 0; color:${TEXTE_MUTED};">Sous-total HT</td>
                    <td align="right" style="padding:6px 0; color:${NOIR};">${subtotal}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:${TEXTE_MUTED};">TVA (20%)</td>
                    <td align="right" style="padding:6px 0; color:${NOIR};">${tax}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:${TEXTE_MUTED};">Livraison</td>
                    <td align="right" style="padding:6px 0; color:${NOIR};">${shippingLabel}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:0;"><hr style="border:none; border-top:1px solid ${BORDURE}; margin:8px 0;" /></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-size:15px; color:${NOIR}; font-weight:600;">Total TTC</td>
                    <td align="right" style="padding:6px 0; font-size:18px; color:${BORDEAUX}; font-weight:600; font-family:'Georgia', 'Times New Roman', serif;">
                      ${total}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 40px 8px;">
                <p style="margin:0 0 12px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${BORDEAUX}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Cliente
                </p>
                <p style="margin:0; font-size:14px; line-height:1.7; color:${NOIR}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  <strong>${escapeHtml(params.customerName)}</strong><br/>
                  <a href="mailto:${escapeHtml(params.customerEmail)}" style="color:${BORDEAUX}; text-decoration:none;">${escapeHtml(params.customerEmail)}</a><br/>
                  <a href="tel:${escapeHtml(params.customerPhone)}" style="color:${NOIR}; text-decoration:none;">${escapeHtml(params.customerPhone)}</a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 40px 8px;">
                <p style="margin:0 0 12px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:${BORDEAUX}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Livraison
                </p>
                <p style="margin:0 0 6px; font-size:14px; color:${NOIR}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  <strong>${escapeHtml(params.shippingMethod)}</strong>
                </p>
                <p style="margin:0; font-size:14px; line-height:1.7; color:${NOIR}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  ${addressLines}
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:32px 40px 40px;">
                <hr style="border:none; border-top:1px solid ${BORDURE}; margin:0 0 16px;" />
                <p style="margin:0; font-size:11px; color:${TEXTE_MUTED}; font-family:'Helvetica Neue', Arial, sans-serif;">
                  Référence Stripe&nbsp;: <span style="font-family:'SF Mono', Menlo, Consolas, monospace; color:${NOIR};">${escapeHtml(params.orderId)}</span>
                </p>
              </td>
            </tr>
          </table>

          <p style="margin:16px 0 0; font-size:11px; color:${TEXTE_MUTED}; font-family:'Helvetica Neue', Arial, sans-serif;">
            Notification automatique &mdash; Lissage sur Mesure
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderText(params: OrderEmailParams): string {
  const subtotal = formatAmount(params.amountSubtotal, params.currency);
  const tax = formatAmount(params.amountTax, params.currency);
  const shipping = formatAmount(params.amountShipping, params.currency);
  const total = formatAmount(params.amountTotal, params.currency);
  const shippingLabel = params.amountShipping === 0 ? "Offerte" : shipping;

  return [
    "NOUVELLE COMMANDE - LISSAGE SUR MESURE",
    "",
    "Produit commandé",
    `  ${params.productName} x ${params.quantity}`,
    "",
    "Détail du paiement",
    `  Sous-total HT : ${subtotal}`,
    `  TVA (20%)    : ${tax}`,
    `  Livraison    : ${shippingLabel}`,
    `  Total TTC    : ${total}`,
    "",
    "Cliente",
    `  ${params.customerName}`,
    `  ${params.customerEmail}`,
    `  ${params.customerPhone}`,
    "",
    "Livraison",
    `  ${params.shippingMethod}`,
    ...params.shippingAddress.split("\n").map((l) => `  ${l}`),
    "",
    `Référence Stripe : ${params.orderId}`,
  ].join("\n");
}

export async function sendOrderNotification(params: OrderEmailParams) {
  const to = process.env.ORDER_NOTIFICATION_EMAIL;
  const from = process.env.ORDER_FROM_EMAIL;

  if (!to || !from) {
    throw new Error("ORDER_NOTIFICATION_EMAIL or ORDER_FROM_EMAIL missing");
  }

  const total = formatAmount(params.amountTotal, params.currency);

  return getResend().emails.send({
    from: `Lissage sur Mesure <${from}>`,
    to,
    replyTo: params.customerEmail,
    subject: `Nouvelle commande : ${params.productName} (${total})`,
    html: renderHtml(params),
    text: renderText(params),
  });
}

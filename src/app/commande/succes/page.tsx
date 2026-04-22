import type { Metadata } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Commande confirmée | Lissage sur Mesure",
  robots: { index: false },
};

export default async function CommandeSucces({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let customerEmail: string | null = null;
  let amountTotal: number | null = null;

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      customerEmail = session.customer_details?.email ?? null;
      amountTotal = session.amount_total;
    } catch {
      // Session introuvable — on affiche quand même le message générique
    }
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20 flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-[var(--color-black)] flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
          Commande confirmée
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-black)] mb-6 leading-[1.1]">
          Merci pour votre commande
        </h1>
        <p className="text-[var(--color-gray-500)] text-base leading-relaxed mb-3">
          Votre paiement a bien été enregistré.
          {customerEmail ? (
            <>
              {" "}Un récapitulatif vous a été envoyé à{" "}
              <strong className="text-[var(--color-black)]">{customerEmail}</strong>.
            </>
          ) : (
            " Un récapitulatif vous a été envoyé par email."
          )}
        </p>
        {amountTotal !== null && (
          <p className="text-[var(--color-gray-500)] text-sm mb-8">
            Montant total : <strong className="text-[var(--color-black)]">{(amountTotal / 100).toFixed(2)} €</strong>
          </p>
        )}
        <p className="text-sm text-[var(--color-gray-500)] mb-12 leading-relaxed">
          Votre commande sera préparée et expédiée sous 2 à 3 jours ouvrés.
          Vous recevrez le numéro de suivi par email dès l&apos;envoi.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[var(--color-gray-800)] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

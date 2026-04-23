import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commande annulée | Lissage sur Mesure",
  robots: { index: false },
};

export default function CommandeAnnulee() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-[var(--color-gray-300)] flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <p className="text-[var(--color-gray-400)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
          Commande annulée
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-black)] mb-6 leading-[1.1]">
          Paiement non finalisé
        </h1>
        <p className="text-[var(--color-gray-500)] text-base leading-relaxed mb-12">
          Votre commande n&apos;a pas été validée et aucun montant n&apos;a été
          débité. Vous pouvez retenter quand vous le souhaitez.
        </p>

        <div className="flex justify-center">
          <Link
            href="/#produit"
            className="inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[var(--color-gray-800)] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

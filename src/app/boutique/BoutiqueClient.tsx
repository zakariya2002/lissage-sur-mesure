"use client";

import { useState } from "react";
import Image from "next/image";
import { products, type Product } from "@/lib/products";

export default function BoutiqueClient() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy(product: Product) {
    setError(null);
    setLoadingId(product.id);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Erreur lors de la création du paiement");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setLoadingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Boutique
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-[var(--color-black)] mb-6 leading-[1.05]">
            Nos <span className="text-[#8B1A3A]">packs</span>
          </h1>
          <p className="text-[var(--color-gray-500)] max-w-xl mx-auto text-base leading-relaxed">
            Commandez en ligne, recevez chez vous. Paiement sécurisé Stripe,
            livraison Colissimo en France métropolitaine.
          </p>
        </div>

        {/* Produits */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[var(--color-gray-200)] bg-white p-8 flex flex-col"
            >
              <div className="relative aspect-square bg-[var(--color-gray-100)] mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-2">
                {product.sousTitre}
              </p>
              <h2 className="font-serif text-2xl text-[var(--color-black)] mb-4">
                {product.nom}
              </h2>
              <p className="text-sm text-[var(--color-gray-500)] leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <div className="flex items-baseline justify-between mb-6 pt-4 border-t border-[var(--color-gray-200)]">
                <span className="text-[10px] text-[var(--color-gray-400)] tracking-[0.2em] uppercase">
                  Prix
                </span>
                <span className="font-serif text-2xl text-[var(--color-black)]">
                  {product.prixDisplay}
                </span>
              </div>

              <button
                onClick={() => handleBuy(product)}
                disabled={loadingId !== null}
                className="w-full px-8 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[var(--color-gray-800)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingId === product.id ? "Redirection…" : "Acheter"}
              </button>
            </div>
          ))}
        </div>

        {error && (
          <div className="mt-8 p-4 border border-red-200 bg-red-50 text-sm text-red-700 max-w-xl mx-auto text-center">
            {error}
          </div>
        )}

        {/* Mentions */}
        <div className="mt-16 text-center text-xs text-[var(--color-gray-400)] space-y-2">
          <p>Paiement 100% sécurisé via Stripe — CB, Apple Pay, Google Pay</p>
          <p>
            En commandant vous acceptez nos{" "}
            <a href="/cgv" className="underline hover:text-[var(--color-black)]">
              Conditions Générales de Vente
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

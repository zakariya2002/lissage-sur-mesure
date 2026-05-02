"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Point de vente ── */
const POINT_DE_VENTE = {
  nom: "Lissage sur Mesure : Point de vente",
  telephone: "+33 6 09 77 52 87",
  telephoneDisplay: "06 09 77 52 87",
  adresse: "7 Place de l'Hôtel de Ville, 93600 Aulnay-sous-Bois",
  lat: 48.9326,
  lng: 2.4964,
};

const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}`;
const wazeUrl = `https://waze.com/ul?ll=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}&navigate=yes`;
const embedUrl = `https://www.google.com/maps?q=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}&z=15&output=embed`;

/* ── Actifs communs ── */
const actifsBase = [
  {
    nom: "Huile de Macadamia",
    description: "Nutrition intense",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 4a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    nom: "Panth\u00e9nol (Provitamine B5)",
    description: "Hydratation profonde",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6m0 8v6m8-10h-6m-8 0H2m15.07-5.07l-4.24 4.24M8.17 15.83l-4.24 4.24m12.14 0l-4.24-4.24M8.17 8.17L3.93 3.93" />
      </svg>
    ),
  },
  {
    nom: "K\u00e9ratine Hydrolys\u00e9e",
    description: "R\u00e9paration de la fibre",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    nom: "Huile de Jojoba",
    description: "Protection et brillance",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    nom: "Collag\u00e8ne Hydrolys\u00e9",
    description: "\u00c9lasticit\u00e9 et souplesse",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

/* ── Actif phare SILVER ── */
const actifSilver = {
  nom: "SILVER",
  description: "Actif phare : protection couleur",
  icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

/* ── Packs produits ── */
interface Pack {
  id: string;
  nom: string;
  sousTitre: string;
  prix: string;
  prixHT: string;
  contenu: string;
  image: string;
  imageAlt: string;
  description1: string;
  description2: string;
  actifs: typeof actifsBase;
  actifPhare?: typeof actifSilver;
  resultats: string[];
}

const packs: Pack[] = [
  {
    id: "sur-mesure",
    nom: "Lissage Sur Mesure",
    sousTitre: "La r\u00e9f\u00e9rence du lissage personnalis\u00e9",
    prix: "183,33 \u20ac HT",
    prixHT: "183,33 \u20ac HT",
    image: "/images/product-shoot-white.png",
    imageAlt: "Produit Lissage sur Mesure",
    contenu: "Produit de lissage Sur Mesure + Shampoing clarifiant : jusqu\u2019\u00e0 10 lissages par pack",
    description1:
      "N\u00e9e d\u2019un constat simple\u00a0: aucun lissage ne devrait fragiliser le cheveu pour \u00eatre efficace. Chaque actif a \u00e9t\u00e9 s\u00e9lectionn\u00e9 avec une exigence pr\u00e9cise\u00a0: obtenir un r\u00e9sultat performant tout en respectant la fibre capillaire.",
    description2:
      "Compatible avec les cheveux d\u00e9color\u00e9s et m\u00e9ch\u00e9s gr\u00e2ce \u00e0 un protocole expert qui adapte les dosages, les temp\u00e9ratures et les temps de pose.",
    actifs: actifsBase,
    resultats: [
      "Cheveu disciplin\u00e9 mais vivant",
      "Lisse sans \u00eatre \u00e9cras\u00e9",
      "Souplesse et densit\u00e9 pr\u00e9serv\u00e9es",
      "Respect\u00e9 sur le long terme",
    ],
  },
  {
    id: "silk",
    nom: "Lissage SILK",
    sousTitre: "Sp\u00e9cial coloration et d\u00e9coloration",
    prix: "191,67 \u20ac HT",
    prixHT: "191,67 \u20ac HT",
    image: "/images/product-shoot-white-v2.png",
    imageAlt: "Produit Lissage SILK",
    contenu: "Produit de lissage SILK + Shampoing clarifiant : jusqu\u2019\u00e0 10 lissages par pack",
    description1:
      "Formul\u00e9 sp\u00e9cifiquement pour les cheveux color\u00e9s et d\u00e9color\u00e9s, le Lissage SILK int\u00e8gre l\u2019actif phare SILVER pour une protection maximale de la couleur tout en lissant la fibre en profondeur.",
    description2:
      "Le protocole SILK pr\u00e9serve l\u2019\u00e9clat de la coloration, neutralise les reflets ind\u00e9sirables et offre un liss\u00e9 miroir sans compromettre l\u2019int\u00e9grit\u00e9 du cheveu trait\u00e9.",
    actifs: actifsBase,
    actifPhare: actifSilver,
    resultats: [
      "Couleur prot\u00e9g\u00e9e et sublim\u00e9e",
      "Brillance miroir longue dur\u00e9e",
      "Z\u00e9ro compromis sur la fibre",
      "R\u00e9sultat soyeux au toucher",
    ],
  },
];

/* ── Variantes d'animation ── */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

/* ── Composant ActifCard ── */
function ActifCard({ actif }: { actif: (typeof actifsBase)[number] }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-[var(--color-gray-100)] border border-[var(--color-gray-200)]">
      <div className="w-10 h-10 flex items-center justify-center shrink-0 text-[var(--color-bordeaux)]">
        {actif.icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-[var(--color-black)] leading-tight">
          {actif.nom}
        </p>
        <p className="text-[11px] text-[var(--color-gray-500)] leading-tight mt-0.5">
          {actif.description}
        </p>
      </div>
    </div>
  );
}

/* ── Composant ActifPhareCard (SILVER) ── */
function ActifPhareCard({ actif }: { actif: typeof actifSilver }) {
  return (
    <div className="relative flex items-center gap-4 p-4 bg-[var(--color-bordeaux)] text-white border-2 border-[var(--color-bordeaux)] col-span-full">
      <div className="absolute -top-3 left-4 px-3 py-0.5 bg-white text-[var(--color-bordeaux)] text-[10px] font-bold uppercase tracking-[0.2em] border border-[var(--color-bordeaux)]">
        Actif phare
      </div>
      <div className="w-12 h-12 flex items-center justify-center shrink-0 text-white">
        {actif.icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold leading-tight tracking-wide">
          {actif.nom}
        </p>
        <p className="text-xs text-white/80 leading-tight mt-0.5">
          {actif.description}
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Composant principal
   ══════════════════════════════════════════════ */
export default function Produit() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goPrev = () => {
    if (current > 0) goTo(current - 1);
  };

  const goNext = () => {
    if (current < packs.length - 1) goTo(current + 1);
  };

  async function handleBuy(productId: string) {
    setCheckoutError(null);
    setLoadingId(productId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Erreur lors de la création du paiement");
      }
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Erreur inconnue");
      setLoadingId(null);
    }
  }

  const pack = packs[current];

  return (
    <section id="produit" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* ── En-t\u00eate ── */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Le produit
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-5 leading-[1.05]">
            Lissage sur <span className="text-[#8B1A3A]">Mesure</span>
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-2xl mx-auto text-base leading-relaxed mb-6">
            Chaque lissage est r&eacute;alis&eacute; en fonction d&apos;un
            diagnostic capillaire pr&eacute;cis et du r&eacute;sultat attendu.
            Nous adaptons le protocole &agrave; votre type de cheveu et au rendu
            souhait&eacute;.
          </p>
          <p className="text-[var(--color-bordeaux)] text-sm font-medium max-w-lg mx-auto leading-relaxed italic">
            Diagnostic r&eacute;alis&eacute; par une experte du lissage, plus
            de 10 ans d&apos;exp&eacute;rience.
          </p>
        </div>

        {/* ── Carousel wrapper ── */}
        <div ref={carouselRef} className="relative mb-20 scroll-mt-24">
          {/* Fl\u00e8ches de navigation */}
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Produit précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 text-[var(--color-gray-400)] hover:text-[var(--color-black)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span className="text-3xl md:text-4xl font-light select-none">&lsaquo;</span>
          </button>

          <button
            onClick={goNext}
            disabled={current === packs.length - 1}
            aria-label="Produit suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 text-[var(--color-gray-400)] hover:text-[var(--color-black)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span className="text-3xl md:text-4xl font-light select-none">&rsaquo;</span>
          </button>

          {/* Slide anim\u00e9 */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={pack.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Image produit */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src={pack.image}
                      alt={pack.imageAlt}
                      width={600}
                      height={600}
                      className="w-full max-w-md h-auto object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Badge prix */}
                    <div className="absolute bottom-4 right-4 bg-[var(--color-black)] text-white px-5 py-2.5 text-center">
                      <span className="text-lg font-semibold tracking-wide block">
                        {pack.prix}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-3">
                    {pack.sousTitre}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-black)] mb-3 leading-tight">
                    {pack.nom}
                  </h3>
                  <p className="text-xs text-[var(--color-gray-400)] mb-6 flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    {pack.contenu}
                  </p>
                  <p className="text-[var(--color-gray-500)] text-base leading-[1.8] mb-6">
                    {pack.description1}
                  </p>
                  <p className="text-[var(--color-gray-500)] text-base leading-[1.8] mb-8">
                    {pack.description2}
                  </p>

                  {/* Actifs cl\u00e9s */}
                  <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-4">
                    Actifs cl&eacute;s
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {/* Actif phare en premier (si pr\u00e9sent) */}
                    {pack.actifPhare && (
                      <ActifPhareCard actif={pack.actifPhare} />
                    )}
                    {pack.actifs.map((actif) => (
                      <ActifCard key={actif.nom} actif={actif} />
                    ))}
                  </div>

                  {/* R\u00e9sultats */}
                  <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-4">
                    R&eacute;sultats
                  </p>
                  <div className="space-y-3 mb-8">
                    {pack.resultats.map((r, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="w-6 h-px bg-[var(--color-black)] shrink-0" />
                        <span className="text-sm text-[var(--color-black)]">
                          {r}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Acheter */}
                  <div className="pt-6 border-t border-[var(--color-gray-200)]">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-[10px] text-[var(--color-gray-400)] tracking-[0.2em] uppercase">
                        Prix
                      </span>
                      <span className="font-serif text-2xl text-[var(--color-black)]">
                        {pack.prix}
                      </span>
                    </div>
                    <button
                      onClick={() => handleBuy(pack.id)}
                      disabled={loadingId === pack.id}
                      className="w-full py-4 bg-[var(--color-black)] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[var(--color-bordeaux)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loadingId === pack.id ? "Redirection…" : "Acheter en ligne"}
                    </button>
                    <p className="text-[11px] text-[var(--color-gray-400)] text-center mt-3">
                      Paiement sécurisé Stripe. Livraison Colissimo en France métropolitaine
                    </p>
                    {checkoutError && (
                      <p className="text-xs text-red-600 text-center mt-3">
                        {checkoutError}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs (dots) */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {packs.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Voir ${p.nom}`}
                className={`h-2 transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[var(--color-bordeaux)]"
                    : "w-2 bg-[var(--color-gray-300)] hover:bg-[var(--color-gray-400)]"
                }`}
              />
            ))}
          {/* Teaser pack SILK */}
          {current === 0 && (
            <button
              onClick={() => goTo(1)}
              className="mt-6 mx-auto flex items-center gap-2 text-[var(--color-bordeaux)] hover:text-[var(--color-black)] transition-colors group"
            >
              <span className="text-xs tracking-wide">
                Découvrir le pack <strong>SILK</strong> : spécial coloration
              </span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">&rsaquo;</span>
            </button>
          )}
          </div>
        </div>

        {/* ── Message achat ── */}
        <div className="bg-[var(--color-bordeaux)] text-white text-center py-5 px-6">
          <p className="text-sm md:text-base font-medium leading-relaxed">
            Vous préférez acheter en magasin&nbsp;? Retrouvez-nous au point de vente
            ci-dessous, ou{" "}
            <a
              href="https://wa.me/33609775287"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              contactez-nous sur WhatsApp
            </a>
          </p>
        </div>

        {/* ── Point de vente ── */}
        <div className="border border-[var(--color-gray-200)] bg-[var(--color-gray-100)]">
          <div className="grid lg:grid-cols-2">
            {/* Carte Google Maps */}
            <div className="h-[350px] lg:h-auto min-h-[350px]">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Point de vente Lissage sur Mesure"
                className="w-full h-full"
              />
            </div>

            {/* Infos point de vente */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-4">
                Point de vente
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-black)] mb-6 leading-tight">
                Retrouvez nos produits
              </h3>

              {/* Adresse */}
              <div className="flex items-start gap-4 mb-5">
                <svg
                  className="w-5 h-5 text-[var(--color-black)] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">
                  {POINT_DE_VENTE.adresse}
                </p>
              </div>

              {/* T\u00e9l\u00e9phone */}
              <div className="flex items-center gap-4 mb-8">
                <svg
                  className="w-5 h-5 text-[var(--color-black)] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${POINT_DE_VENTE.telephone}`}
                  className="text-sm text-[var(--color-black)] font-medium hover:opacity-60 transition-opacity"
                >
                  {POINT_DE_VENTE.telephoneDisplay}
                </a>
              </div>

              {/* Boutons itin\u00e9raire */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-[var(--color-gray-800)] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 border border-[var(--color-black)] text-[var(--color-black)] text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-[var(--color-black)] hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.54 6.63c.69 2.24.46 4.27-.46 6.13-1.07 2.17-2.99 3.72-5.3 4.42-.23.07-.47-.06-.54-.29-.07-.23.06-.47.29-.54 2.06-.62 3.77-2.01 4.73-3.96.81-1.63 1.01-3.41.41-5.37a7.468 7.468 0 00-5.29-5.16c-1.99-.48-4.15-.15-5.93.91-1.76 1.05-2.96 2.72-3.39 4.66-.43 1.95-.09 4.01 1.04 5.73.33.5.23 1.17-.21 1.55-.17.14-.37.21-.57.21-.36 0-.71-.18-.92-.5-1.36-2.07-1.77-4.54-1.25-6.89.52-2.33 1.97-4.35 4.08-5.6 2.14-1.28 4.74-1.68 7.14-1.1 2.43.59 4.44 2.26 5.65 4.59l.05.11.15.31z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

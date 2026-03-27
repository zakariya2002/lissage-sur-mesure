"use client";

import Image from "next/image";

const POINT_DE_VENTE = {
  nom: "Lissage sur Mesure — Point de vente",
  telephone: "+33 6 12 28 75 11",
  telephoneDisplay: "06 12 28 75 11",
  adresse: "7 Place de l'Hôtel de Ville, 93600 Aulnay-sous-Bois",
  lat: 48.9326,
  lng: 2.4964,
};

const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}`;
const wazeUrl = `https://waze.com/ul?ll=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}&navigate=yes`;
const embedUrl = `https://www.google.com/maps?q=${POINT_DE_VENTE.lat},${POINT_DE_VENTE.lng}&z=15&output=embed`;

const resultats = [
  "Cheveu discipliné mais vivant",
  "Lisse sans être écrasé",
  "Souplesse et densité préservées",
  "Respecté sur le long terme",
];

const actifs = [
  "Huile de Macadamia",
  "Panthénol (Provitamine B5)",
  "Kératine Hydrolysée",
  "Huile de Jojoba",
  "Collagène Hydrolysé",
];

export default function Produit() {
  return (
    <section id="produit" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* ── En-tête ── */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Le produit
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-5 leading-[1.05]">
            Lissage sur <span className="text-[#8B1A3A]">Mesure</span>
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-lg mx-auto text-base leading-relaxed">
            Une formule pensée, pas copiée. Un protocole respectueux de chaque fibre capillaire.
          </p>
        </div>

        {/* ── Produit — image + description ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image produit */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/product-shoot-white.png"
                alt="Produit Lissage sur Mesure"
                width={600}
                height={600}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-black)] mb-6 leading-tight">
              Une formule qui respecte autant qu&apos;elle performe
            </h3>
            <p className="text-[var(--color-gray-500)] text-base leading-[1.8] mb-6">
              Née d&apos;un constat simple : aucun lissage ne devrait fragiliser le cheveu
              pour être efficace. Chaque actif a été sélectionné avec une exigence
              précise — obtenir un résultat performant tout en respectant la fibre capillaire.
            </p>
            <p className="text-[var(--color-gray-500)] text-base leading-[1.8] mb-8">
              Compatible avec les cheveux décolorés et méchés grâce à un protocole
              expert qui adapte les dosages, les températures et les temps de pose.
            </p>

            {/* Actifs clés */}
            <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-4">
              Actifs clés
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {actifs.map((actif) => (
                <span
                  key={actif}
                  className="px-3 py-1.5 text-xs text-[var(--color-black)] border border-[var(--color-gray-200)] bg-[var(--color-gray-100)]"
                >
                  {actif}
                </span>
              ))}
            </div>

            {/* Résultats */}
            <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-4">
              Résultats
            </p>
            <div className="space-y-3">
              {resultats.map((r, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-6 h-px bg-[var(--color-black)] shrink-0" />
                  <span className="text-sm text-[var(--color-black)]">{r}</span>
                </div>
              ))}
            </div>
          </div>
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
                <svg className="w-5 h-5 text-[var(--color-black)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">
                  {POINT_DE_VENTE.adresse}
                </p>
              </div>

              {/* Téléphone */}
              <div className="flex items-center gap-4 mb-8">
                <svg className="w-5 h-5 text-[var(--color-black)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${POINT_DE_VENTE.telephone}`}
                  className="text-sm text-[var(--color-black)] font-medium hover:opacity-60 transition-opacity"
                >
                  {POINT_DE_VENTE.telephoneDisplay}
                </a>
              </div>

              {/* Boutons itinéraire */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-[var(--color-gray-800)] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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

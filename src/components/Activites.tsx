"use client";

import { motion } from "framer-motion";

const activites = [
  {
    titre: "Le Produit",
    description:
      "Une formule unique, pensée pour lisser sans fragiliser. Des actifs naturels sélectionnés avec exigence.",
    href: "#formule",
    cta: "Découvrir la formule",
    roman: "I",
  },
  {
    titre: "Le Lissage",
    description:
      "Un service de lissage professionnel, adapté à chaque type de cheveu. Résultat naturel et durable.",
    href: "#lissage",
    cta: "En savoir plus",
    roman: "II",
  },
  {
    titre: "La Formation",
    description:
      "Apprenez la méthode Lissage sur Mesure. Formation certifiante, éligible CPF, pour professionnels et particuliers.",
    href: "#formation",
    cta: "Voir la formation",
    roman: "III",
  },
];

export default function Activites() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Trois expertises
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[var(--color-black)] leading-[1.05]">
            Un savoir-faire, trois métiers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activites.map((activite, i) => (
            <motion.a
              key={activite.roman}
              href={activite.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-[var(--color-gray-100)] p-8 md:p-10 hover:bg-[var(--color-black)] transition-colors duration-500 flex flex-col"
            >
              <span className="font-serif text-4xl text-[var(--color-gray-300)] group-hover:text-white/20 transition-colors duration-500 mb-6">
                {activite.roman}
              </span>
              <h3 className="font-serif text-2xl text-[var(--color-black)] group-hover:text-white transition-colors duration-500 mb-4">
                {activite.titre}
              </h3>
              <p className="text-[var(--color-gray-500)] group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500 mb-8 flex-1">
                {activite.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-black)] group-hover:text-white transition-colors duration-500">
                {activite.cta}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

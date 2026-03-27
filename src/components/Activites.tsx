"use client";

import { motion } from "framer-motion";

const activites = [
  {
    titre: "Nos Produits",
    description:
      "Une formule unique, pensée pour lisser sans fragiliser. Des actifs naturels sélectionnés avec exigence.",
    href: "#formule",
    cta: "Découvrir la formule",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.43 4.294a2.25 2.25 0 01-2.134 1.544H8.564a2.25 2.25 0 01-2.134-1.544L5 14.5m14 0H5" />
      </svg>
    ),
  },
  {
    titre: "Nos Lissages",
    description:
      "Des lissages sur mesure dans notre salon à Aulnay-sous-Bois, adaptés à chaque nature de cheveu. Un diagnostic personnalisé pour un résultat naturel et durable.",
    href: "#lissage",
    cta: "En savoir plus",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    titre: "Notre Formation",
    description:
      "Apprenez la méthode Lissage sur Mesure. Formation certifiante, éligible CPF, pour professionnels et particuliers.",
    href: "#formation",
    cta: "Voir la formation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v-3.75m0 0h-.008v.008H6.75V11.25z" />
      </svg>
    ),
  },
];

export default function Activites() {
  return (
    <section className="py-20 md:py-32 bg-white">
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
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[var(--color-black)] leading-[1.05] mb-5">
            Un savoir-faire, trois métiers
          </h2>
          <p className="text-[var(--color-gray-500)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Du développement de notre formule exclusive à la formation de professionnels, chaque pilier incarne notre exigence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activites.map((activite, i) => (
            <motion.a
              key={activite.titre}
              href={activite.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-[var(--color-gray-100)] p-8 md:p-12 [@media(hover:hover)]:hover:bg-[var(--color-bordeaux)] transition-colors duration-500 flex flex-col"
            >
              {/* Icône */}
              <span className="text-[var(--color-bordeaux)] group-hover:text-white transition-colors duration-500 mb-5">
                {activite.icon}
              </span>

              <h3 className="font-serif text-2xl font-bold text-[var(--color-bordeaux)] group-hover:text-white transition-colors duration-500 mb-4">
                {activite.titre}
              </h3>
              <p className="text-[var(--color-gray-500)] group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500 mb-8 flex-1">
                {activite.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-bordeaux)] group-hover:text-white transition-colors duration-500">
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

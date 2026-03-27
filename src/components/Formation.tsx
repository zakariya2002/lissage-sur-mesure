"use client";

import Image from "next/image";

const modules = [
  { title: "Diagnostic capillaire avancé", description: "Analyser chaque type de cheveu, sa porosité, son histoire et ses besoins spécifiques." },
  { title: "Protocole Lissage sur Mesure", description: "Maîtriser la formule, les dosages, les temps de pose et les techniques d'application." },
  { title: "Expertise cheveux blonds", description: "Module dédié aux cheveux sensibilisés : adaptation du protocole, températures, couleur." },
  { title: "Pratique & mise en situation", description: "Cas pratiques sur modèles réels pour valider la maîtrise en conditions salon." },
];

export default function Formation() {
  return (
    <section id="formation" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-14">
          <div className="bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] p-10 md:p-14 text-center">
            <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-3">Se former</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-black)] mb-4 leading-[1.05]">
              Formation Lissage sur Mesure
            </h2>
            <p className="text-[var(--color-gray-500)] max-w-lg mx-auto text-sm leading-relaxed mb-10">
              Une formation professionnelle complète pour développer une expertise unique.
            </p>

            {/* Badges CPF + OPCO — mis en avant */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
              <div className="bg-white border border-[var(--color-gray-200)] p-6 text-center">
                <Image
                  src="/images/cpf-badge.png"
                  alt="CPF — Compte Personnel de Formation"
                  width={120}
                  height={120}
                  className="w-16 h-16 object-contain mx-auto mb-3"
                />
                <p className="text-[var(--color-black)] font-semibold text-sm mb-1">Éligible CPF</p>
                <p className="text-[var(--color-gray-500)] text-xs leading-relaxed">
                  Financement via Mon Compte Formation
                </p>
              </div>
              <div className="bg-white border border-[var(--color-gray-200)] p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[var(--color-black)] flex items-center justify-center rounded">
                  <span className="text-white font-bold text-[11px] tracking-wider">OPCO</span>
                </div>
                <p className="text-[var(--color-black)] font-semibold text-sm mb-1">Éligible OPCO</p>
                <p className="text-[var(--color-gray-500)] text-xs leading-relaxed">
                  Prise en charge par votre opérateur de compétences
                </p>
              </div>
            </div>

            <div className="block">
              <a
                href="#rendez-vous"
                className="cta-fill inline-block px-10 py-4 bg-[var(--color-bordeaux)] text-white text-[11px] font-medium uppercase tracking-[0.2em]"
              >
                <span className="cta-bg bg-[var(--color-bordeaux-dark,#5a1a2a)]" />
                <span className="cta-text">Se renseigner sur la formation</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Public */}
          <div className="bg-white p-8 md:p-10 border border-[var(--color-gray-200)]">
            <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-3">Public</p>
            <h3 className="font-serif text-2xl text-[var(--color-black)] mb-8">
              À qui s&apos;adresse cette formation ?
            </h3>
            <div className="space-y-5">
              {[
                { label: "Coiffeurs & coiffeuses", desc: "en salon souhaitant élargir leur offre" },
                { label: "Professionnels de la beauté", desc: "cherchant une spécialisation premium" },
                { label: "Futurs professionnels", desc: "en reconversion ou en début de carrière" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border-l-2 border-[var(--color-black)] bg-[var(--color-gray-100)]">
                  <div>
                    <p className="font-medium text-[var(--color-black)] text-base">{item.label}</p>
                    <p className="text-xs text-[var(--color-gray-400)] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div>
            <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-3">Programme</p>
            <h3 className="font-serif text-2xl text-[var(--color-black)] mb-8">
              Ce que vous apprendrez
            </h3>
            <div className="space-y-4">
              {modules.map((mod, i) => (
                <div key={i} className="group bg-white p-6 border border-[var(--color-gray-200)] hover:border-[var(--color-black)] transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-2xl text-[var(--color-black)] shrink-0">
                      {["I", "II", "III", "IV"][i]}
                    </span>
                    <div>
                      <h4 className="font-medium text-[var(--color-black)] text-sm mb-2 tracking-wide uppercase">{mod.title}</h4>
                      <p className="text-sm text-[var(--color-gray-500)] leading-relaxed">{mod.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Formation */}
        <div className="mt-16">
          <div className="border border-[var(--color-gray-200)] bg-white p-12 md:p-16 text-center">
            <p className="text-[var(--color-bordeaux)] text-[11px] tracking-[0.3em] uppercase mb-3">
              Passez à l&apos;action
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[var(--color-black)] mb-4 leading-tight">
              Intéressé(e) par la formation ?
            </h3>
            <p className="text-[var(--color-gray-500)] mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Réservez un appel de 15 minutes pour discuter de votre projet,
              vos objectifs et le financement CPF.
            </p>
            <a
              href="#rendez-vous"
              className="cta-fill inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-bordeaux)] text-white font-medium text-[11px] uppercase tracking-[0.2em]"
            >
              <span className="cta-bg bg-[var(--color-bordeaux-dark,#5a1a2a)]" />
              <svg className="cta-text w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="cta-text">Être rappelé(e) pour en parler</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

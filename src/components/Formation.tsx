import Image from "next/image";

const modules = [
  { title: "Diagnostic capillaire personnalisé", description: "Apprendre à réaliser un diagnostic capillaire complet : porosité, élasticité, historique chimique et attentes de la cliente. La base de toute prestation sur mesure." },
  { title: "Protocole Lissage sur Mesure", description: "Formuler un lissage adapté à chaque profil capillaire. Dosages, temps de pose, techniques d'application : tout est ajusté selon le diagnostic et le résultat souhaité." },
  { title: "Expertise cheveux sensibilisés", description: "Module dédié aux cheveux blonds, colorés ou fragilisés : adapter le protocole sur mesure pour garantir un résultat respectueux de la fibre." },
  { title: "Pratique & mise en situation", description: "Cas pratiques sur modèles réels : du diagnostic à la réalisation du lissage personnalisé, pour valider votre maîtrise en conditions salon." },
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
            <p className="text-[var(--color-gray-500)] max-w-lg mx-auto text-sm leading-relaxed mb-6">
              Formée par une experte du cheveu avec plus de 10 ans d&apos;expérience,
              cette formation vous enseigne le <strong className="text-[var(--color-black)]">diagnostic capillaire</strong> et
              la réalisation d&apos;un <strong className="text-[var(--color-black)]">lissage adapté</strong> aux
              désirs et au profil de chaque cliente. Une approche 100&nbsp;% sur mesure.
            </p>

            {/* Prix */}
            <div className="mb-10">
              <div className="inline-block border border-[var(--color-gray-200)] bg-white px-8 py-5">
                <p className="text-[10px] text-[var(--color-gray-400)] tracking-[0.25em] uppercase mb-1">Tarif formation</p>
                <p className="font-serif text-2xl md:text-3xl font-light text-[var(--color-black)] leading-none">
                  Sur demande
                </p>
                <p className="text-[10px] text-[var(--color-gray-400)] mt-1.5">Financement OPCO possible</p>
              </div>
            </div>

            {/* Organismes de financement */}
            <div className="mb-10">
              <p className="text-[10px] text-[var(--color-gray-400)] tracking-[0.25em] uppercase mb-5">
                Financements acceptés
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="bg-white border border-[var(--color-gray-200)] px-6 py-4 flex items-center justify-center h-20 w-40">
                  <Image
                    src="/images/logo-opco-ep.jpeg"
                    alt="OPCO EP : Opérateur de compétences des Entreprises de Proximité"
                    width={220}
                    height={90}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-[var(--color-gray-200)] px-6 py-4 flex items-center justify-center h-20 w-40">
                  <Image
                    src="/images/logo-agefice.jpeg"
                    alt="AGEFICE : Fonds d'assurance formation des chefs d'entreprise"
                    width={120}
                    height={120}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-[var(--color-gray-200)] px-6 py-4 flex items-center justify-center h-20 w-40">
                  <Image
                    src="/images/logo-fafcea.jpeg"
                    alt="FAFCEA : Fonds d'Assurance Formation des Chefs d'Entreprise Artisanale"
                    width={220}
                    height={100}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-[var(--color-gray-500)] text-xs leading-relaxed mt-5 text-center max-w-md mx-auto">
                Prise en charge possible par votre opérateur de compétences
              </p>
            </div>

            <div className="block">
              <a
                href="#rendez-vous"
                className="cta-fill inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em]"
              >
                <span className="cta-bg bg-[var(--color-gray-800)]" />
                <span className="cta-text">Se renseigner sur la formation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Indicateurs de résultats */}
        <div className="mb-14">
          <p className="text-center text-[var(--color-gray-400)] text-[11px] tracking-[0.3em] uppercase mb-8">
            Indicateurs de résultats
          </p>
          <div className="border border-[var(--color-gray-200)] bg-white p-8 md:p-12">
            <div className="grid grid-cols-2 gap-y-8">
              <div className="text-center border-r border-[var(--color-gray-200)]">
                <p className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-black)] mb-1">100%</p>
                <p className="text-sm text-[var(--color-gray-500)]">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-black)] mb-1">100%</p>
                <p className="text-sm text-[var(--color-gray-500)]">Assiduité</p>
              </div>
              <div className="text-center col-span-2">
                <p className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-black)] mb-1">100%</p>
                <p className="text-sm text-[var(--color-gray-500)]">Réussite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formatrice */}
        <div className="border border-[var(--color-gray-200)] bg-white p-8 md:p-10">
          <div>
            <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-1">Votre formatrice</p>
            <p className="text-[var(--color-black)] text-sm md:text-base leading-relaxed">
              <strong>Experte du cheveu depuis plus de 10 ans</strong>, votre formatrice a développé
              une méthode fondée sur le <strong>diagnostic capillaire</strong> pour offrir un
              <strong> lissage adapté</strong> à chaque profil. Son approche sur mesure garantit des résultats
              respectueux de la fibre capillaire et fidèles aux attentes de chaque cliente.
            </p>
          </div>
        </div>

        {/* Rendement */}
        <div className="bg-[var(--color-bordeaux)] text-white p-10 md:p-16 mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="font-serif text-7xl md:text-8xl font-bold leading-none">
                  x5
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 leading-tight">
                  Un seul pack, cinq fois votre investissement
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                  Chaque pack à 183,33&nbsp;€ comprend le produit de lissage + un shampoing
                  clarifiant, et permet de réaliser jusqu&apos;à 10 lissages clients.
                  À ~120&nbsp;€ le lissage, c&apos;est 1&nbsp;200&nbsp;€ de chiffre d&apos;affaires
                  généré, soit un rendement multiplié par 5.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="min-w-10 h-8 px-2 border border-white/30 flex items-center justify-center text-[10px]">183€</span>
                    <span className="text-sm text-white/90">Pack investi</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="min-w-10 h-8 px-2 border border-white/30 flex items-center justify-center text-[10px]">x10</span>
                    <span className="text-sm text-white/90">Lissages réalisés</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="min-w-10 h-8 px-2 bg-white/10 flex items-center justify-center text-[10px]">1200€</span>
                    <span className="text-sm text-white/90">CA généré</span>
                  </div>
                </div>
              </div>
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
                { label: "Coiffeurs & coiffeuses", desc: "en salon souhaitant proposer un lissage sur mesure, adapté à chaque cliente" },
                { label: "Professionnels de la beauté", desc: "cherchant à maîtriser le diagnostic capillaire et une spécialisation premium" },
                { label: "Futurs professionnels", desc: "en reconversion ou en début de carrière, prêts à se former auprès d'une experte" },
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
              Du diagnostic au lissage sur mesure
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
              Prêt(e) à maîtriser le lissage sur mesure ?
            </h3>
            <p className="text-[var(--color-gray-500)] mb-3 max-w-md mx-auto text-sm leading-relaxed">
              Formation finançable via OPCO. Réservez un appel de 15 minutes
              pour discuter de votre projet, vos objectifs et les options de financement.
            </p>
            <p className="text-[var(--color-gray-400)] mb-8 max-w-sm mx-auto text-xs leading-relaxed">
              Diagnostic capillaire, protocole personnalisé, expertise cheveux sensibilisés. Formez-vous auprès d&apos;une experte avec 10 ans d&apos;expérience.
            </p>
            <a
              href="#rendez-vous"
              className="cta-fill inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-black)] text-white font-medium text-[11px] uppercase tracking-[0.2em]"
            >
              <span className="cta-bg bg-[var(--color-gray-800)]" />
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

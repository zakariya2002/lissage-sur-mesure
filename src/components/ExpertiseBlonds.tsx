export default function ExpertiseBlonds() {
  return (
    <section id="expertise-blonds" className="pt-16 md:pt-20 pb-14 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-20">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Spécialité exclusive
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-6 leading-[1.05]">
            Le lissage des
            <br />
            <em className="not-italic text-[#8B1A3A]">cheveux blonds</em>
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-xl mx-auto text-base leading-relaxed mb-6">
            Les cheveux blonds, méchés ou décolorés sont les plus exigeants.
            Plus fragilisés, plus poreux, plus sensibles...
          </p>
          <div className="w-20 h-px bg-[var(--color-gray-300)] mx-auto" />
        </div>

        {/* Deux colonnes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[var(--color-gray-100)] p-8 md:p-10 lg:p-12 h-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-[var(--color-black)]">I</span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-black)] tracking-[0.1em] uppercase">
                  Approche adaptée
                </h3>
                <p className="text-[11px] text-[var(--color-gray-400)]">
                  à la décoloration
                </p>
              </div>
            </div>
            <p className="text-[var(--color-gray-600)] leading-[1.8] mb-8">
              Contrairement aux idées reçues, le lissage n&apos;est pas
              incompatible avec la décoloration.{" "}
              <strong className="text-[var(--color-black)]">
                À condition de maîtriser parfaitement le protocole.
              </strong>
            </p>
            <ul className="space-y-4">
              {[
                "Un diagnostic capillaire précis",
                "Une adaptation des actifs et des dosages",
                "Une maîtrise rigoureuse des températures",
                "Un respect strict des temps de pose",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[var(--color-gray-600)]">
                  <span className="w-6 h-px bg-[var(--color-black)] shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-black)] p-8 md:p-10 lg:p-12 h-full text-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-white">II</span>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-[0.1em] uppercase">
                  Pourquoi c&apos;est essentiel
                </h3>
                <p className="text-[11px] text-white/80">
                  Les risques d&apos;un mauvais protocole
                </p>
              </div>
            </div>
            <p className="text-white leading-[1.8] mb-8">
              Un mauvais lissage sur cheveux décolorés peut avoir des
              conséquences irréversibles :
            </p>
            <ul className="space-y-4">
              {[
                "Casser la fibre",
                "Altérer la couleur",
                "Affiner excessivement la masse",
                "Donner un rendu sec ou terne",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white">
                  <span className="w-6 h-px bg-white/20 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] text-white/80 italic">
              C&apos;est pour éviter ces erreurs que nous avons créé une
              approche entièrement dédiée.
            </p>
          </div>
        </div>

        {/* Notre différence */}
        <div className="border border-[var(--color-gray-200)] bg-white p-10 md:p-16 lg:p-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-bordeaux)] text-[11px] tracking-[0.3em] uppercase mb-5">
              Notre différence
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-black)] mb-4 leading-tight">
              Pas un lissage &ldquo;adaptable&rdquo;
            </h3>
            <p className="text-[var(--color-gray-500)] text-base mb-12 max-w-lg mx-auto leading-relaxed">
              Nous proposons un protocole spécifique pour chaque type de cheveu,
              dont un <strong className="text-[var(--color-black)]">protocole expert pour les cheveux blonds</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
              {[
                "Un cheveu lissé mais préservé",
                "Une couleur respectée et sublimée",
                "Une fibre renforcée visuellement",
                "Un rendu souple, brillant et naturel",
              ].map((result, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-[var(--color-gray-100)] text-left">
                  <span className="text-[var(--color-black)] font-serif text-xl shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[var(--color-black)] text-sm leading-relaxed">{result}</p>
                </div>
              ))}
            </div>

            <a
              href="#rendez-vous"
              className="cta-fill inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              <span className="cta-bg bg-[var(--color-gray-800)]" />
              <span className="cta-text">Réserver un appel découverte</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

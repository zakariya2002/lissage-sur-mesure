import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_NUMBER = "33612287511";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite en savoir plus sur la formation Lissage sur Mesure."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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

        {/* Section WhatsApp complète */}
        <div id="rendez-vous" className="mt-16">
          <div className="mb-14">
            <div className="relative overflow-hidden">
              <Image
                src="/images/hero-bg.jpg"
                alt="Lissage sur Mesure"
                width={1200}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/80" />
              <div className="relative z-10 p-12 md:p-16 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-white/40 mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight"
                  style={{ color: "#FFFFFF" }}
                >
                  Échangeons sur WhatsApp
                </h2>
                <p className="text-white text-base max-w-lg mx-auto leading-relaxed drop-shadow-md">
                  15 à 20 minutes pour discuter de la formation, du protocole et du financement CPF. Sans engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div>
                <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-6">
                  Ce que comprend l&apos;échange
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    "Échange personnalisé de 15 à 20 min",
                    "Réponses à toutes vos questions",
                    "Information sur le financement CPF",
                    "Sans engagement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[var(--color-gray-100)]">
                      <svg className="w-4 h-4 text-[var(--color-black)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-black)] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 border-[var(--color-black)] pl-6">
                  <p className="text-[var(--color-gray-600)] text-sm font-serif italic leading-relaxed">
                    &ldquo;Un simple échange m&apos;a permis de comprendre tout le programme
                    et de lancer mon inscription CPF en quelques jours.&rdquo;
                  </p>
                  <p className="text-[var(--color-gray-400)] text-xs mt-3 tracking-wider uppercase">
                    — Professionnelle en reconversion
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="bg-[var(--color-gray-100)] p-10 md:p-14 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 bg-[#25D366] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-black)] mb-4">
                    Écrivez-nous directement
                  </h3>
                  <p className="text-[var(--color-gray-500)] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                    Posez vos questions, obtenez des réponses rapides et personnalisées. Nous vous répondons sous 24h.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-[#1da851] transition-all duration-300 active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Nous contacter sur WhatsApp
                  </a>

                  <p className="text-[var(--color-gray-400)] text-sm mt-6">+33 6 12 28 75 11</p>

                  <div className="mt-10 pt-8 border-t border-[var(--color-gray-200)]">
                    <p className="text-[var(--color-gray-500)] text-sm mb-4">Retrouvez-nous sur Instagram</p>
                    <a
                      href="https://www.instagram.com/lissage_sur_mesure?igsh=MXNlcHFteGVqNzBmMQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3 border border-[var(--color-gray-300)] text-[var(--color-black)] font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--color-black)] hover:text-white hover:border-[var(--color-black)] transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      @lissage_sur_mesure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

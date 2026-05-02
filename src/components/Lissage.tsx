import Image from "next/image";
import ScrollReveal, { AnimatedLine } from "./ScrollReveal";

const WHATSAPP_URL =
  "https://wa.me/33612287511?text=" +
  encodeURIComponent("Bonjour, je souhaite prendre rendez-vous pour un lissage.");

export default function Lissage() {
  return (
    <section id="lissage" className="py-16 md:py-24 bg-[var(--color-gray-100)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Notre service
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-6 leading-[1.05]">
            Votre lissage <span className="text-[#8B1A3A]">sur mesure</span>
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-xl mx-auto text-base leading-relaxed mb-6">
            Forte de 10 ans d&apos;expertise capillaire, notre experte réalise
            un diagnostic approfondi avant chaque soin pour vous proposer
            un lissage parfaitement adapté à vos cheveux et à vos envies.
          </p>
          <AnimatedLine className="w-20 h-px bg-[var(--color-gray-300)] mx-auto" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="overflow-hidden img-zoom">
                <Image
                  src="/images/woman-lissage.jpg"
                  alt="Service de lissage professionnel"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--color-gray-200)] -z-10" />
            </div>
          </ScrollReveal>

          {/* Contenu */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              {/* Diagnostic */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-black)] mb-4">
                  Un diagnostic avant chaque lissage
                </h3>
                <p className="text-[var(--color-gray-500)] leading-[1.8]">
                  Cheveux épais, fins, bouclés, crépus, colorés, méchés ou
                  décolorés. Aucun cheveu ne se traite de la même façon.
                  C&apos;est pourquoi chaque séance commence par un diagnostic
                  capillaire complet, réalisé par une experte avec plus de 10 ans
                  d&apos;expérience.
                </p>
              </div>

              {/* Formule adaptée */}
              <div className="border-l-2 border-[var(--color-bordeaux)] pl-6">
                <p className="text-[11px] text-[var(--color-bordeaux)] tracking-[0.3em] uppercase mb-2">
                  Formule adaptée
                </p>
                <p className="text-[var(--color-gray-500)] text-sm leading-[1.8] mb-4">
                  Contrairement aux lissages classiques où chaque cliente reçoit le même produit,
                  ici la formule est ajustée selon votre diagnostic&nbsp;:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Plus douce sur cheveux sensibilisés",
                    "Plus gainante sur cheveux épais",
                    "Compatible cheveux blonds ou décolorés, protocole précis",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-px bg-[var(--color-bordeaux)] shrink-0" />
                      <span className="text-sm text-[var(--color-black)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocole personnalisé */}
              <div className="border-l-2 border-[var(--color-black)] pl-6">
                <p className="text-[11px] text-[var(--color-black)] tracking-[0.3em] uppercase mb-2">
                  Protocole personnalisé
                </p>
                <p className="text-[var(--color-gray-500)] text-sm leading-[1.8] mb-4">
                  Même le geste change selon la cliente. On ne travaille pas une racine
                  vierge comme des longueurs décolorées&nbsp;:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Température du fer différente",
                    "Nombre de passages adapté",
                    "Temps de pose ajusté",
                    "Zones traitées différemment : racines / longueurs",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-px bg-[var(--color-black)] shrink-0" />
                      <span className="text-sm text-[var(--color-black)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="relative pl-6 py-2 border-l border-[var(--color-bordeaux)]">
                <p className="text-lg font-serif italic text-[var(--color-black)] leading-snug">
                  Ici, aucun lissage ne se ressemble. Votre diagnostic guide
                  tout, c&apos;est la promesse du sur mesure.
                </p>
              </blockquote>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-black)] text-white font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--color-gray-800)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Prendre rendez-vous
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

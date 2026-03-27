"use client";

import { useEffect, useRef, useCallback } from "react";
import ScrollReveal, { AnimatedLine } from "./ScrollReveal";

const actifs = [
  { name: "Huile de Macadamia", subtitle: "& complexe d'huiles végétales", benefit: "Souplesse sans alourdir", description: "Le cheveu reste fluide, brillant et naturel, sans effet figé.", roman: "I" },
  { name: "Panthénol", subtitle: "Provitamine B5 & Aloe Vera", benefit: "Hydratation pendant le processus", description: "Conserve l'eau au cœur de la fibre, évitant l'effet sec des lissages classiques.", roman: "II" },
  { name: "Kératine Hydrolysée", subtitle: "", benefit: "Lisser sans casser", description: "Uniformise la fibre capillaire en surface, sans rigidifier ni étouffer le cheveu.", roman: "III" },
  { name: "Huile de Jojoba", subtitle: "", benefit: "Équilibre naturel", description: "Mime le sébum naturel, protège la fibre tout en conservant sa légèreté.", roman: "IV" },
  { name: "Collagène Hydrolysé", subtitle: "", benefit: "Qualité du toucher", description: "Apporte matière, souplesse et un toucher plus dense et soyeux.", roman: "V" },
];

const reversedActifs = [...actifs].reverse();
const NUM_CARDS = reversedActifs.length;
const ROMAN_TOTAL = "V";

export default function Actifs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const totalScroll = container.offsetHeight - window.innerHeight;
    const stepSize = totalScroll / (NUM_CARDS - 1);
    window.scrollBy({ top: stepSize, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-stack-card]");
    const numCards = cards.length;
    if (!numCards) return;

    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalScroll = container.offsetHeight - vh;
    const scrollInto = -rect.top;

    const progress = Math.max(0, Math.min(1, scrollInto / totalScroll));
    const step = progress * (numCards - 1);

    cards.forEach((card, i) => {
      const shouldSlide = i > 0 && i > numCards - 1 - step;

      if (shouldSlide) {
        card.style.transition =
          "transform 1.3s cubic-bezier(0.9,-0.2,0.1,1.2), opacity 0.5s ease";
        card.style.transform = "translate(-50%, -280%)";
        card.style.opacity = "0";
      } else {
        card.style.transition = "opacity 0.5s ease";
        card.style.transform = "translate(-50%, -50%)";
        card.style.opacity = "1";
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="actifs" className="bg-[var(--color-gray-100)]">
      {/* ── Titre ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "var(--color-gray-100)",
        }}
      >
        <div className="pt-16 md:pt-20 pb-12 max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
              Composition
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-5 leading-[1.05]">
              Pourquoi ces actifs ?
            </h2>
            <p className="text-[var(--color-gray-500)] max-w-lg mx-auto text-base leading-relaxed">
              Chaque ingrédient répond à un besoin réel du cheveu pendant un lissage.
            </p>
          </ScrollReveal>
          <AnimatedLine className="w-20 h-px bg-[var(--color-gray-300)] mx-auto" />
        </div>
      </div>

      {/* ── Cartes empilées — hauteur réduite sur mobile ── */}
      <div
        ref={containerRef}
        className="relative h-[350vh] md:h-[250vh]"
      >
        <div
          style={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
            height: 0,
            width: "100%",
          }}
        >
          {reversedActifs.map((actif, index) => (
            <div
              key={actif.roman}
              data-stack-card
              onClick={handleCardClick}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "min(460px, 88vw)",
                transform: "translate(-50%, -50%)",
                opacity: 1,
                cursor: "pointer",
                transition:
                  "transform 1.3s cubic-bezier(0.9,-0.2,0.1,1.2), opacity 0.5s ease",
                willChange: "transform, opacity",
                zIndex: index + 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  background: "var(--color-gray-800)",
                  border: "1px solid var(--color-gray-700)",
                  borderRadius: "1rem",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "2.5rem",
                  background: "var(--color-black)",
                  border: "1px solid var(--color-gray-700)",
                  borderRadius: "1rem",
                  color: "white",
                  minHeight: "260px",
                }}
                className="group"
              >
                <span className="block font-serif text-5xl mb-4 select-none text-white/90">
                  {actif.roman}
                </span>
                <h3 className="font-serif text-xl text-white mb-1">
                  {actif.name}
                </h3>
                {actif.subtitle && (
                  <p className="text-[11px] text-white/50 tracking-wider mb-4">
                    {actif.subtitle}
                  </p>
                )}
                <div className="w-6 group-hover:w-12 h-px bg-[var(--color-gray-400)] mb-4 transition-all duration-500" />
                <p className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">
                  {actif.benefit}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {actif.description}
                </p>
                <div className="flex justify-end mt-4">
                  <span className="text-white/30 text-xs tracking-widest">
                    {actif.roman}/{ROMAN_TOTAL}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 bg-[var(--color-gray-100)] py-16 md:py-20 text-center">
        <ScrollReveal>
          <a
            href="#rendez-vous"
            className="cta-fill inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em]"
          >
            <span className="cta-bg bg-[var(--color-gray-800)]" />
            <span className="cta-text">En savoir plus — Réserver un appel</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

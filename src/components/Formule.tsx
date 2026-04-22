"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal, { AnimatedLine } from "./ScrollReveal";

export default function Formule() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [20, -20]);

  return (
    <section ref={sectionRef} id="formule" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">
            Notre philosophie
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[var(--color-black)] mb-8 leading-[1.05]">
            Une formule <span className="text-[#8B1A3A]">unique</span>
          </h2>
          <AnimatedLine className="w-20 h-px bg-[var(--color-gray-300)] mx-auto" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Texte avec parallax */}
          <motion.div style={{ y: textY }}>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-7">
                <p className="text-lg md:text-xl text-[var(--color-gray-600)] leading-relaxed font-light">
                  Cette formule n&apos;est pas le fruit du hasard.
                </p>
                <p className="text-base text-[var(--color-gray-500)] leading-[1.8]">
                  Elle est née d&apos;un constat simple :{" "}
                  <strong className="text-[var(--color-black)] font-medium">
                    aucun lissage ne devrait fragiliser le cheveu pour être efficace.
                  </strong>
                </p>
                <p className="text-base text-[var(--color-gray-500)] leading-[1.8]">
                  Après des années de pratique, de formations et d&apos;observation
                  sur tous types de cheveux, j&apos;ai sélectionné chaque actif
                  avec une exigence précise :
                </p>
                {/* Citation mise en valeur */}
                <blockquote className="relative pl-8 py-4">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-black)]" />
                  <p className="text-xl md:text-2xl font-serif italic text-[var(--color-black)] leading-snug">
                    Obtenir un résultat performant tout en respectant la fibre capillaire.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Image avec parallax prononcé */}
          <motion.div style={{ y: imageY }}>
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative group">
                <div className="overflow-hidden img-zoom relative aspect-[4/5]">
                  <Image
                    src="/images/woman-smiling.jpg"
                    alt="Résultat lissage sur mesure — cheveux lisses et brillants"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Cadre décoratif */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--color-gray-200)] -z-10" />
              </div>
            </ScrollReveal>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal, { AnimatedLine } from "./ScrollReveal";

export default function Vision() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "center center"],
  });
  const quoteOpacity = useTransform(quoteProgress, [0, 0.6], [0.2, 1]);
  const quoteScale = useTransform(quoteProgress, [0, 0.6], [0.96, 1]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="vision" className="py-16 md:py-20 bg-[var(--color-gray-100)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Citation — reveal au scroll, plus immersive */}
        <motion.div
          ref={quoteRef}
          style={{ opacity: quoteOpacity, scale: quoteScale }}
          className="mb-24"
        >
          <div className="relative bg-[var(--color-black)] py-14 md:py-20 px-8 flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedLine className="w-12 h-px bg-white/20 mx-auto mb-8" />
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] italic">
                &ldquo;Un beau résultat ne doit jamais se faire au détriment de la santé du cheveu.&rdquo;
              </p>
              <AnimatedLine className="w-12 h-px bg-white/20 mx-auto mt-8" />
            </div>
          </div>
        </motion.div>

        {/* Vision — layout plus aéré */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <ScrollReveal direction="left" delay={0.2} parallax={-15}>
            <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">Ma vision</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-black)] mb-5 leading-tight">
              Pas un lissage de plus
            </h2>
            <AnimatedLine className="w-12 h-px bg-[var(--color-black)] mb-8" />
            <div className="space-y-6">
              <p className="text-base text-[var(--color-gray-600)] leading-[1.8]">
                Je n&apos;ai pas voulu créer un lissage de plus.
              </p>
              <p className="text-base text-[var(--color-gray-600)] leading-[1.8]">
                J&apos;ai voulu créer{" "}
                <strong className="text-[var(--color-black)]">
                  une formule capable de s&apos;adapter à chaque chevelure
                </strong>
                , en respectant sa nature et son histoire.
              </p>
              <blockquote className="relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-black)]" />
                <p className="font-serif text-lg italic text-[var(--color-black)] leading-relaxed">
                  Parce que le vrai luxe aujourd&apos;hui, c&apos;est le sur-mesure intelligent.
                </p>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Image avec parallax */}
          <motion.div style={{ y: imageY }}>
            <ScrollReveal direction="right" delay={0.3}>
              <div className="aspect-[6/5] overflow-hidden group img-zoom">
                <Image
                  src="/images/woman-lissage-action.jpg"
                  alt="Lissage sur mesure : résultat brillant et lisse"
                  width={1024}
                  height={1365}
                  className="w-full h-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </motion.div>
        </div>

        {/* Engagement — sans animation */}
        <div className="bg-white border border-[var(--color-gray-200)] p-10 md:p-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
              Notre engagement
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[var(--color-black)] mb-4 leading-tight">
              Rien n&apos;est laissé au hasard
            </h3>
            <div className="w-16 h-px bg-[var(--color-gray-300)] mx-auto mb-6" />
            <p className="text-base text-[var(--color-gray-500)] leading-relaxed max-w-lg mx-auto">
              Chez Lissage sur Mesure, chaque protocole est exécuté avec précision,
              dans le respect total du cheveu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Parce qu'un cheveu décoloré mérite encore plus d'expertise.",
              "Et parce que le vrai luxe, c'est de savoir adapter parfaitement.",
            ].map((text, i) => (
              <div key={i} className="bg-[var(--color-gray-100)] p-8 text-center h-full flex flex-col justify-center">
                <p className="text-sm text-[var(--color-black)] leading-relaxed font-serif italic">
                  &ldquo;{text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#rendez-vous"
              className="cta-fill inline-block px-10 py-4 bg-[var(--color-black)] text-white text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              <span className="cta-bg bg-[var(--color-gray-800)]" />
              <span className="cta-text">Réserver un appel téléphonique</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

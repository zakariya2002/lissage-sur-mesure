"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Hero — Inspiré Salt Yard :
 * - Ken Burns (zoom lent continu) sur l'image de fond
 * - Parallax : l'image descend plus lentement que le scroll
 * - Texte reveal staggeré avec easing luxury
 * - CTA avec hover fill animation
 */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax : l'image bouge à 50% de la vitesse du scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Le contenu fade out en scrollant
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Background image — Parallax + Ken Burns zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Lissage sur Mesure"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
      </motion.div>

      {/* Overlay gradient — plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenu — fade out au scroll */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <h1 className="sr-only">Lissage sur Mesure — Salon de lissage professionnel et formation CPF à Aulnay-sous-Bois</h1>
            <Image
              src="/images/logo-white.png"
              alt="Lissage sur Mesure — Salon de lissage professionnel à Aulnay-sous-Bois"
              width={500}
              height={220}
              className="mx-auto w-64 md:w-80 lg:w-96 h-auto"
              priority
            />
          </motion.div>

          {/* Ligne qui se dessine */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-white/40 mx-auto mb-10 origin-center"
          />

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-xl mx-auto mb-3 leading-relaxed font-light"
          >
            Une formule pensée, pas copiée. Un protocole respectueux de chaque
            fibre capillaire, adapté à chaque chevelure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-[11px] text-white/40 font-medium mb-14 tracking-[0.3em] uppercase"
          >
            Formation professionnelle &middot; Compatible CPF
          </motion.p>

          {/* CTA — hover fill inspiré Salt Yard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#rendez-vous"
              className="group relative px-10 py-4 bg-white text-[var(--color-black)] font-medium text-[11px] uppercase tracking-[0.2em] overflow-hidden transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-[var(--color-black)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Réserver un appel
              </span>
            </a>
            <a
              href="#formule"
              className="group relative px-10 py-4 border border-white/20 text-white font-medium text-[11px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 group-hover:text-[var(--color-black)] transition-colors duration-500">
                Découvrir la méthode
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator animé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

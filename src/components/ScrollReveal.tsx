"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  /** Parallax : décale l'élément au scroll (ex: -30 = monte de 30px) */
  parallax?: number;
}

const directionOffset = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  parallax,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallax ? -parallax : 0, parallax ?? 0]
  );

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // easing "luxury" — lent au début, fluide
      }}
      style={parallax ? { y: parallaxY } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — les enfants apparaissent l'un après l'autre.
 * Inspiré du reveal staggeré de Salt Yard.
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Ligne animée qui se dessine au scroll — séparateur premium.
 */
export function AnimatedLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`origin-center ${className}`}
    />
  );
}

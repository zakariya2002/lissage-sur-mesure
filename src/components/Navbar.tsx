"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "La Formule", href: "#formule" },
  { label: "Le Produit", href: "#produit" },
  { label: "Les Actifs", href: "#actifs" },
  { label: "Expertise Blonds", href: "#expertise-blonds" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#rendez-vous" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-gray-200)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo image */}
          <a href="#" className="block">
            <Image
              src={scrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
              alt="Lissage sur Mesure"
              width={180}
              height={50}
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[var(--color-black)] ${
                  scrolled ? "text-[var(--color-gray-500)]" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rendez-vous"
              className="ml-2 px-7 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase bg-[var(--color-black)] text-white hover:bg-[var(--color-gray-800)] transition-all duration-300"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? i === 0
                      ? "rotate-45 translate-y-[7px] bg-[var(--color-black)]"
                      : i === 1
                      ? "opacity-0"
                      : "-rotate-45 -translate-y-[7px] bg-[var(--color-black)]"
                    : scrolled
                    ? "bg-[var(--color-black)]"
                    : "bg-white"
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[var(--color-gray-200)]"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--color-gray-600)] text-sm tracking-[0.1em] uppercase font-medium py-2 border-b border-[var(--color-gray-100)] hover:text-[var(--color-black)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#rendez-vous"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center py-3.5 font-semibold text-[11px] tracking-[0.15em] uppercase bg-[var(--color-black)] text-white"
              >
                Prendre rendez-vous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

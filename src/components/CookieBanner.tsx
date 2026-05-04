"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Bandeau de consentement cookies — RGPD
 * Cookie "lsm_cookie_consent" stocké en localStorage (pas de vrai cookie déposé avant consentement).
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lsm_cookie_consent");
    if (!consent) {
      // Afficher après un léger délai pour ne pas gêner le chargement
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lsm_cookie_consent", "accepted");
    localStorage.setItem("lsm_cookie_consent_date", new Date().toISOString());
    window.dispatchEvent(new CustomEvent("lsm:consent-accepted"));
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("lsm_cookie_consent", "refused");
    localStorage.setItem("lsm_cookie_consent_date", new Date().toISOString());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[var(--color-black)] text-white p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-6">
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">
                  Respect de votre vie privée
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Nous utilisons des cookies pour mesurer l&apos;audience et personnaliser nos
                  publicités (Snapchat). Vous pouvez refuser&nbsp;: seuls les cookies
                  strictement nécessaires resteront actifs. En savoir plus dans notre{" "}
                  <a
                    href="/confidentialite#cookies"
                    className="text-white underline hover:text-white/80 transition-colors"
                  >
                    politique de cookies
                  </a>.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleRefuse}
                  className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] bg-white text-[var(--color-black)] hover:bg-[var(--color-gray-100)] transition-all"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

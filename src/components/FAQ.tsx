"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "Combien de temps dure un lissage sur mesure ?", answer: "La durée varie entre 2h et 4h selon la longueur, l'épaisseur et le type de cheveu. Chaque prestation est unique car le protocole est adapté à votre chevelure." },
  { question: "Le lissage est-il compatible avec la décoloration ?", answer: "Oui, c'est même notre spécialité. Nous avons développé un protocole expert pour les cheveux blonds, méchés et décolorés. Grâce à un diagnostic précis et une adaptation rigoureuse, le lissage respecte l'intégrité du cheveu sensibilisé." },
  { question: "Combien de temps tient le lissage ?", answer: "La tenue varie entre 3 et 5 mois, selon votre type de cheveu, votre routine et les conditions d'entretien." },
  { question: "La formation est-elle éligible au CPF ?", answer: "Oui, notre formation est éligible au CPF. Vous pouvez financer tout ou partie grâce à vos droits acquis. Contactez-nous pour les modalités." },
  { question: "À qui s'adresse la formation ?", answer: "Aux coiffeurs en salon, professionnels de la beauté et personnes en reconversion. Aucun prérequis en lissage n'est nécessaire." },
  { question: "Le lissage abîme-t-il les cheveux ?", answer: "Notre formule respecte la fibre capillaire grâce à des actifs naturels (kératine hydrolysée, huile de macadamia, collagène...) et un protocole adapté à chaque type de cheveu." },
  { question: "Comment se déroule un appel de découverte ?", answer: "L'appel dure 15 à 20 minutes. Nous discutons de votre parcours, vos objectifs, le contenu de la formation et le financement. Sans engagement." },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--color-gray-200)]">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="font-serif text-base md:text-lg text-[var(--color-black)] pr-8 group-hover:opacity-60 transition-opacity">{question}</span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <svg className="w-3 h-3 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-6 text-[var(--color-gray-500)] text-sm leading-relaxed font-light pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="py-14 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-5">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-black)] mb-4">Questions fréquentes</h2>
          <div className="diamond-sep"><span /></div>
        </div>
        <div>
          {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />)}
        </div>
        <div className="mt-12 text-center">
          <a href="#rendez-vous" className="inline-block text-[var(--color-black)] text-[11px] font-medium uppercase tracking-[0.15em] border-b border-[var(--color-black)] pb-1 hover:opacity-60 transition-opacity">
            Réservez un appel pour en discuter
          </a>
        </div>
      </div>
    </section>
  );
}

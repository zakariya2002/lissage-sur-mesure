"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface FormData { prenom: string; nom: string; telephone: string; email: string; statut: string; creneau: string; message: string; consentement: boolean; }
interface FormErrors { [key: string]: string; }

export default function RendezVous() {
  const [formData, setFormData] = useState<FormData>({ prenom: "", nom: "", telephone: "", email: "", statut: "", creneau: "", message: "", consentement: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.prenom.trim()) e.prenom = "Requis";
    if (!formData.nom.trim()) e.nom = "Requis";
    if (!formData.telephone.trim()) e.telephone = "Requis";
    else if (!/^[\d\s+()-]{8,}$/.test(formData.telephone)) e.telephone = "Numéro invalide";
    if (!formData.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Email invalide";
    if (!formData.statut) e.statut = "Requis";
    if (!formData.consentement) e.consentement = "Vous devez accepter pour continuer";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => { ev.preventDefault(); if (validate()) { console.log("Form:", formData); setSubmitted(true); } };
  const handleChange = (f: keyof FormData, v: string | boolean) => { setFormData(p => ({ ...p, [f]: f === "consentement" ? v === "true" || v === true : v })); if (errors[f]) setErrors(p => { const n = { ...p }; delete n[f]; return n; }); };

  const ic = (f: string) => `w-full px-4 py-3.5 border ${errors[f] ? "border-[var(--color-black)] bg-[var(--color-gray-100)]" : "border-[var(--color-gray-200)] bg-white"} text-[var(--color-black)] text-sm placeholder-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-black)] transition-all`;

  if (submitted) {
    return (
      <section id="rendez-vous" className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-[var(--color-gray-100)] p-14 border border-[var(--color-gray-200)]">
            <div className="w-12 h-12 mx-auto mb-6 bg-[var(--color-black)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-serif text-2xl text-[var(--color-black)] mb-4">Demande envoyée</h3>
            <p className="text-[var(--color-gray-500)] text-sm">Nous vous recontacterons dans les plus brefs délais.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rendez-vous" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Bandeau titre — image de fond */}
        <ScrollReveal className="mb-14">
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
                Réservez votre appel téléphonique
              </h2>
              <p className="text-white text-base max-w-lg mx-auto leading-relaxed drop-shadow-md">
                15 à 20 minutes pour discuter de la formation, du protocole et du financement CPF. Sans engagement.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <p className="text-[var(--color-bordeaux)] text-[11px] font-medium tracking-[0.3em] uppercase mb-6">
                Ce que comprend l&apos;appel
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

              {/* Témoignage */}
              <div className="border-l-2 border-[var(--color-black)] pl-6">
                <p className="text-[var(--color-gray-600)] text-sm font-serif italic leading-relaxed">
                  &ldquo;Un simple appel m&apos;a permis de comprendre tout le programme
                  et de lancer mon inscription CPF en quelques jours.&rdquo;
                </p>
                <p className="text-[var(--color-gray-400)] text-xs mt-3 tracking-wider uppercase">
                  — Professionnelle en reconversion
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal direction="right" delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-[var(--color-gray-100)] p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Prénom *</label>
                    <input type="text" placeholder="Votre prénom" className={ic("prenom")} value={formData.prenom} onChange={e => handleChange("prenom", e.target.value)} />
                    {errors.prenom && <p className="mt-1 text-[11px] text-[var(--color-black)]">{errors.prenom}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Nom *</label>
                    <input type="text" placeholder="Votre nom" className={ic("nom")} value={formData.nom} onChange={e => handleChange("nom", e.target.value)} />
                    {errors.nom && <p className="mt-1 text-[11px] text-[var(--color-black)]">{errors.nom}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Téléphone *</label>
                    <input type="tel" placeholder="06 00 00 00 00" className={ic("telephone")} value={formData.telephone} onChange={e => handleChange("telephone", e.target.value)} />
                    {errors.telephone && <p className="mt-1 text-[11px] text-[var(--color-black)]">{errors.telephone}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Email *</label>
                    <input type="email" placeholder="votre@email.com" className={ic("email")} value={formData.email} onChange={e => handleChange("email", e.target.value)} />
                    {errors.email && <p className="mt-1 text-[11px] text-[var(--color-black)]">{errors.email}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Vous êtes *</label>
                  <select className={ic("statut")} value={formData.statut} onChange={e => handleChange("statut", e.target.value)}>
                    <option value="">Sélectionnez votre statut</option>
                    <option value="coiffeur">Coiffeur / Coiffeuse en salon</option>
                    <option value="futur-coiffeur">Futur(e) coiffeur(se) / En reconversion</option>
                    <option value="independant">Professionnel(le) indépendant(e)</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.statut && <p className="mt-1 text-[11px] text-[var(--color-black)]">{errors.statut}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Créneau souhaité</label>
                  <select className={ic("creneau")} value={formData.creneau} onChange={e => handleChange("creneau", e.target.value)}>
                    <option value="">Pas de préférence</option>
                    <option value="matin">Matin (9h - 12h)</option>
                    <option value="apres-midi">Après-midi (14h - 17h)</option>
                    <option value="soir">Fin de journée (17h - 19h)</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[11px] font-medium text-[var(--color-black)] mb-2 tracking-[0.15em] uppercase">Votre message</label>
                  <textarea rows={4} placeholder="Décrivez-nous vos besoins..." className={ic("message")} value={formData.message} onChange={e => handleChange("message", e.target.value)} />
                </div>
                {/* Checkbox consentement RGPD */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentement}
                      onChange={e => handleChange("consentement", e.target.checked ? "true" : "")}
                      className="mt-1 w-4 h-4 accent-[var(--color-black)] shrink-0"
                    />
                    <span className="text-[11px] text-[var(--color-gray-500)] leading-relaxed">
                      J&apos;accepte que mes données personnelles soient traitées par Lissage sur Mesure
                      dans le but de recevoir un rappel téléphonique. Ces données seront conservées
                      12 mois maximum et ne seront pas cédées à des tiers. Je dispose d&apos;un droit
                      d&apos;accès, de rectification et de suppression (voir{" "}
                      <a href="/confidentialite" className="text-[var(--color-black)] underline" target="_blank">
                        politique de confidentialité
                      </a>). *
                    </span>
                  </label>
                  {errors.consentement && <p className="mt-1 text-[11px] text-[var(--color-black)] ml-7">{errors.consentement}</p>}
                </div>

                <button type="submit" className="w-full py-4 bg-[var(--color-black)] text-white font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--color-gray-800)] transition-all duration-300 active:scale-[0.99]">
                  Demander un rappel téléphonique
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

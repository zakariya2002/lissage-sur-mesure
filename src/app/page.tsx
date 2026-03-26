"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Formule from "@/components/Formule";
import Produit from "@/components/Produit";
import Actifs from "@/components/Actifs";
import ExpertiseBlonds from "@/components/ExpertiseBlonds";
import Formation from "@/components/Formation";
import RendezVous from "@/components/RendezVous";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Formule />
        <Produit />
        <Actifs />
        <ExpertiseBlonds />
        <Formation />
        <RendezVous />
        <Vision />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

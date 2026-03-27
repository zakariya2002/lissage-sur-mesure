"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activites from "@/components/Activites";
import Formule from "@/components/Formule";
import Lissage from "@/components/Lissage";
import Produit from "@/components/Produit";
import Actifs from "@/components/Actifs";
import ExpertiseBlonds from "@/components/ExpertiseBlonds";
import Formation from "@/components/Formation";
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
        <Activites />
        <Formule />
        <Produit />
        <Actifs />
        <Lissage />
        <ExpertiseBlonds />
        <Formation />
        <Vision />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Activites = dynamic(() => import("@/components/Activites"));
const Formule = dynamic(() => import("@/components/Formule"));
const Produit = dynamic(() => import("@/components/Produit"));
const Actifs = dynamic(() => import("@/components/Actifs"));
const Lissage = dynamic(() => import("@/components/Lissage"));
const ExpertiseBlonds = dynamic(() => import("@/components/ExpertiseBlonds"));
const Formation = dynamic(() => import("@/components/Formation"));
const Vision = dynamic(() => import("@/components/Vision"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));
const CookieBanner = dynamic(() => import("@/components/CookieBanner"));

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Activites />
        <Lissage />
        <Formule />
        <Produit />
        <Actifs />
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

import type { Metadata } from "next";
import BoutiqueClient from "./BoutiqueClient";

export const metadata: Metadata = {
  title: "Boutique | Lissage sur Mesure",
  description:
    "Commandez en ligne nos packs de lissage professionnel — Sur Mesure et SILK. Livraison France.",
};

export default function BoutiquePage() {
  return <BoutiqueClient />;
}

export interface Product {
  id: "sur-mesure" | "silk";
  nom: string;
  sousTitre: string;
  description: string;
  prix: number;
  prixDisplay: string;
  image: string;
  imageAlt: string;
  stripePriceIdEnvKey: "STRIPE_PRICE_SUR_MESURE" | "STRIPE_PRICE_SILK";
}

export const products: Product[] = [
  {
    id: "sur-mesure",
    nom: "Lissage Sur Mesure",
    sousTitre: "La référence du lissage personnalisé",
    description:
      "Produit de lissage Sur Mesure + Shampoing clarifiant — jusqu'à 10 lissages par pack. Compatible cheveux décolorés et méchés.",
    prix: 18333,
    prixDisplay: "183,33 €",
    image: "/images/product-shoot-white.png",
    imageAlt: "Pack Lissage Sur Mesure",
    stripePriceIdEnvKey: "STRIPE_PRICE_SUR_MESURE",
  },
  {
    id: "silk",
    nom: "Lissage SILK",
    sousTitre: "Spécial coloration et décoloration",
    description:
      "Produit de lissage SILK + Shampoing clarifiant — jusqu'à 10 lissages par pack. Intègre l'actif phare SILVER pour la protection couleur.",
    prix: 19167,
    prixDisplay: "191,67 €",
    image: "/images/product-shoot-white-v2.png",
    imageAlt: "Pack Lissage SILK",
    stripePriceIdEnvKey: "STRIPE_PRICE_SILK",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getStripePriceId(product: Product): string {
  const id = process.env[product.stripePriceIdEnvKey];
  if (!id) {
    throw new Error(
      `${product.stripePriceIdEnvKey} missing — créez le produit dans Stripe Dashboard et copiez le Price ID dans .env.local`,
    );
  }
  return id;
}

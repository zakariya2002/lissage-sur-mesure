import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lissage-sur-mesure.com"),
  title: "Lissage sur Mesure | Lissage & Formation à Aulnay-sous-Bois",
  description:
    "Lissage sur mesure à Aulnay-sous-Bois : lissage professionnel adapté à chaque cheveu, spécialiste cheveux blonds et décolorés. Formation certifiante éligible CPF.",
  keywords: [
    "lissage sur mesure",
    "lissage aulnay-sous-bois",
    "lissage cheveux blonds",
    "lissage cheveux décolorés",
    "formation lissage CPF",
    "lissage professionnel 93",
    "salon lissage seine-saint-denis",
  ],
  alternates: {
    canonical: "https://www.lissage-sur-mesure.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lissage sur Mesure — Lissage & Formation à Aulnay-sous-Bois",
    description:
      "Lissage professionnel sur mesure, spécialiste cheveux blonds & décolorés. Formation certifiante éligible CPF à Aulnay-sous-Bois.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.lissage-sur-mesure.com",
    siteName: "Lissage sur Mesure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lissage sur Mesure — Salon de lissage professionnel à Aulnay-sous-Bois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lissage sur Mesure — Lissage & Formation à Aulnay-sous-Bois",
    description:
      "Lissage professionnel sur mesure, spécialiste cheveux blonds & décolorés. Formation éligible CPF.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      name: "Lissage sur Mesure",
      description:
        "Salon de lissage professionnel sur mesure à Aulnay-sous-Bois. Spécialiste cheveux blonds et décolorés.",
      url: "https://www.lissage-sur-mesure.com",
      telephone: "+33612287511",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Place de l'Hôtel de Ville",
        addressLocality: "Aulnay-sous-Bois",
        postalCode: "93600",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.9326,
        longitude: 2.4964,
      },
      image: "https://www.lissage-sur-mesure.com/og-image.jpg",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.instagram.com/lissage_sur_mesure",
      ],
    },
    {
      "@type": "Course",
      name: "Formation Lissage sur Mesure",
      description:
        "Formation professionnelle certifiante en lissage capillaire sur mesure. Éligible CPF. Pour coiffeurs, professionnels de la beauté et personnes en reconversion.",
      provider: {
        "@type": "Organization",
        name: "Lissage sur Mesure",
      },
      educationalCredentialAwarded: "Certification professionnelle",
      financialAidEligible: "CPF — Compte Personnel de Formation",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien de temps dure un lissage sur mesure ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La durée varie entre 2h et 4h selon la longueur, l'épaisseur et le type de cheveu. Chaque prestation est unique car le protocole est adapté à votre chevelure.",
          },
        },
        {
          "@type": "Question",
          name: "Le lissage est-il compatible avec la décoloration ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, c'est même notre spécialité. Nous avons développé un protocole expert pour les cheveux blonds, méchés et décolorés. Grâce à un diagnostic précis et une adaptation rigoureuse, le lissage respecte l'intégrité du cheveu sensibilisé.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps tient le lissage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La tenue varie entre 3 et 5 mois, selon votre type de cheveu, votre routine et les conditions d'entretien.",
          },
        },
        {
          "@type": "Question",
          name: "La formation est-elle éligible au CPF ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre formation est éligible au CPF. Vous pouvez financer tout ou partie grâce à vos droits acquis. Contactez-nous pour les modalités.",
          },
        },
        {
          "@type": "Question",
          name: "À qui s'adresse la formation ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aux coiffeurs en salon, professionnels de la beauté et personnes en reconversion. Aucun prérequis en lissage n'est nécessaire.",
          },
        },
        {
          "@type": "Question",
          name: "Le lissage abîme-t-il les cheveux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre formule respecte la fibre capillaire grâce à des actifs naturels (kératine hydrolysée, huile de macadamia, collagène...) et un protocole adapté à chaque type de cheveu.",
          },
        },
        {
          "@type": "Question",
          name: "Comment se déroule un appel de découverte ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'appel dure 15 à 20 minutes. Nous discutons de votre parcours, vos objectifs, le contenu de la formation et le financement. Sans engagement.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

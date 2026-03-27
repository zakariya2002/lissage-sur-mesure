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
  title: "Lissage sur Mesure | La Solution pour vos Cheveux",
  description:
    "Formation professionnelle de lissage capillaire sur mesure. Expertise unique sur cheveux blonds et décolorés. Formation éligible CPF. Protocole respectueux de la fibre capillaire.",
  keywords: [
    "lissage sur mesure",
    "formation lissage",
    "lissage cheveux blonds",
    "lissage décolorés",
    "formation CPF coiffure",
    "lissage premium",
    "protocole lissage",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lissage sur Mesure — La Solution pour vos Cheveux",
    description:
      "Formation professionnelle de lissage capillaire sur mesure. Expertise unique cheveux blonds & décolorés. Éligible CPF.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.lissage-sur-mesure.com",
    siteName: "Lissage sur Mesure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Lissage sur Mesure — La Solution pour vos Cheveux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lissage sur Mesure — La Solution pour vos Cheveux",
    description:
      "Formation professionnelle de lissage capillaire sur mesure. Expertise unique cheveux blonds & décolorés. Éligible CPF.",
    images: ["/og-image.jpg"],
  },
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
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

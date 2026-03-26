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
  openGraph: {
    title: "Lissage sur Mesure | La Solution pour vos Cheveux",
    description:
      "Formation professionnelle de lissage capillaire sur mesure. Expertise unique cheveux blonds & décolorés. Éligible CPF.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

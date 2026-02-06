import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAY 2010 | Électrification HTA/BT, Éclairage Public, Génie Climatique - Rabat Maroc",
  description: "HAY 2010 - Expert en génie climatique, électrification HTA/BT et éclairage public au Maroc. Plus de 20 ans d'expérience, agréé ONEE et qualifié Ministère Équipement.",
  keywords: ["électrification", "éclairage public", "génie climatique", "HTA", "BT", "ONEE", "Maroc", "Rabat", "travaux publics"],
  authors: [{ name: "HAY 2010" }],
  openGraph: {
    title: "HAY 2010 | Électrification, Éclairage Public & Génie Climatique",
    description: "Solutions complètes en électrification HTA/BT, éclairage public et génie climatique. Agréé ONEE, qualifié Ministère Équipement.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

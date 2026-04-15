import type { Metadata } from "next";
import type { Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "BatiFlow | Tableau de bord trésorerie artisans",
  description:
    "BatiFlow centralise vos chantiers, vos acomptes et vos soldes pour vous donner une lecture de trésorerie claire sur 90 jours depuis votre téléphone.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "BatiFlow | Tableau de bord trésorerie artisans",
    description:
      "Suivez vos chantiers, vos acomptes et vos retards dans une interface mobile-first pensée pour les artisans.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BatiFlow | Tableau de bord trésorerie artisans",
    description:
      "Trésorerie 90 jours, suivi chantiers et alertes retard pour artisans du bâtiment.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BatiFlow",
  },
};

export const viewport: Viewport = {
  themeColor: "#d55b2d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <Script
          src="https://phospho-nanocorp-prod--nanocorp-api-fastapi-app.modal.run/beacon/snippet.js?s=pagehush"
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}

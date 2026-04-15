import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
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
  title: "BatiFlow | Votre trésorerie BTP claire sur 90 jours",
  description:
    "BatiFlow centralise vos chantiers et vos paiements pour vous donner une vision claire à 90 jours, accessible en 2 minutes depuis votre téléphone.",
  openGraph: {
    title: "BatiFlow | Votre trésorerie BTP claire sur 90 jours",
    description:
      "Visualisez votre trésorerie sur 90 jours, suivez vos chantiers et recevez des alertes de retard depuis votre téléphone.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BatiFlow | Votre trésorerie BTP claire sur 90 jours",
    description:
      "Trésorerie 90 jours, suivi chantiers, alertes retard et magic link pour artisans du bâtiment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <script
          src="https://phospho-nanocorp-prod--nanocorp-api-fastapi-app.modal.run/beacon/snippet.js?s=pagehush"
          defer
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}

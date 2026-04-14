import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BatiFlow — Vois ta tréso sur 90 jours",
  description:
    "BatiFlow aide les artisans du BTP à voir leur trésorerie sur 90 jours, d'un coup d'œil, depuis leur téléphone. Pour les plombiers, électriciens, maçons, peintres et menuisiers.",
  openGraph: {
    title: "BatiFlow — Vois ta tréso sur 90 jours",
    description:
      "Pour les artisans qui veulent garder la tête hors de l'eau. Trésorerie prévisionnelle simple, mobile-first.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <script
          src="https://phospho-nanocorp-prod--nanocorp-api-fastapi-app.modal.run/beacon/snippet.js?s=pagehush"
          defer
        />
      </head>
      <body className="min-h-full antialiased" style={{ background: "#0f1923", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PageHush — Know before your users do",
  description:
    "Status page + incident alerting for solo developers. Auto-alerts on Discord/Twitter when Stripe webhooks stop firing or DB queries fail.",
  openGraph: {
    title: "PageHush — Know before your users do",
    description:
      "Status page + incident alerting for solo developers running micro-SaaS products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmMono.variable} ${ibmSans.variable} h-full`}>
      <head>
        <script
          src="https://phospho-nanocorp-prod--nanocorp-api-fastapi-app.modal.run/beacon/snippet.js?s=pagehush"
          defer
        />
      </head>
      <body className="min-h-full bg-[#07090d] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BatiFlow",
    short_name: "BatiFlow",
    description:
      "Tableau de bord mobile-first pour piloter vos chantiers, vos acomptes et votre trésorerie à 90 jours.",
    start_url: "/tableau-de-bord",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8f9fa",
    theme_color: "#d55b2d",
    lang: "fr-FR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

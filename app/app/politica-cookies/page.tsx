import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import PoliticaCookiesContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const title = isCa ? "Política de Galetes" : "Política de Cookies";
  const description = isCa
    ? "Informació sobre l'ús de galetes a bertila.es i com gestionar les preferències."
    : "Información sobre el uso de cookies en bertila.es y cómo gestionar tus preferencias.";

  return {
    title,
    description,
    keywords: ["politica de cookies", "cookies", "bertila.es"],
    alternates: { canonical: "/politica-cookies" },
    openGraph: {
      title: `${title} | Bertila`,
      description,
      url: "/politica-cookies",
      type: "article",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bertila`,
      description,
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default function PoliticaCookiesPage() {
  return <PoliticaCookiesContent />;
}

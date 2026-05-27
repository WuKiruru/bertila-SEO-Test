import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import type { Language } from "@/lib/i18n/translations";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import AccesibilidadContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const contentByLang: Record<Language, { title: string; description: string }> = {
    ca: {
      title: "Accessibilitat",
      description:
        "Declaració d'accessibilitat del lloc web bertila.es i compromís amb un accés universal.",
    },
    es: {
      title: "Accesibilidad",
      description:
        "Declaración de accesibilidad del sitio web bertila.es y compromiso con un acceso universal.",
    },
  };

  const { title, description } = contentByLang[lang];

  return {
    title,
    description,
    keywords: ["accesibilidad web", "WCAG 2.1", "bertila.es"],
    alternates: { canonical: "/accesibilidad" },
    openGraph: {
      title: `${title} | Bertila`,
      description,
      url: "/accesibilidad",
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

export default function AccesibilidadPage() {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: isCa ? "Inici" : "Inicio", url: "/" },
    { name: isCa ? "Accessibilitat" : "Accesibilidad", url: "/accesibilidad" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AccesibilidadContent />
    </>
  );
}

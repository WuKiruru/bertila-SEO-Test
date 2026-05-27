import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import type { Language } from "@/lib/i18n/translations";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import PrivacidadContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const contentByLang: Record<Language, { title: string; description: string }> = {
    ca: {
      title: "Política de Privacitat",
      description:
        "Política de privacitat de bertila.es — tractament de dades personals conforme al RGPD i la LOPDGDD.",
    },
    es: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad de bertila.es — tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
    },
  };

  const { title, description } = contentByLang[lang];

  return {
    title,
    description,
    keywords: ["politica de privacidad", "RGPD", "LOPDGDD", "bertila.es"],
    alternates: { canonical: "/privacidad" },
    openGraph: {
      title: `${title} | Bertila`,
      description,
      url: "/privacidad",
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

export default function PrivacidadPage() {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: isCa ? "Inici" : "Inicio", url: "/" },
    {
      name: isCa ? "Política de privacitat" : "Política de privacidad",
      url: "/privacidad",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PrivacidadContent />
    </>
  );
}

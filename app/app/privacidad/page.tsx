import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import PrivacidadContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const title = isCa ? "Política de Privacitat" : "Política de Privacidad";
  const description = isCa
    ? "Política de privacitat de bertila.es — tractament de dades personals conforme al RGPD i la LOPDGDD."
    : "Política de privacidad de bertila.es — tratamiento de datos personales conforme al RGPD y la LOPDGDD.";

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

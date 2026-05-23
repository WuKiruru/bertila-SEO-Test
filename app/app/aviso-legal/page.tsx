import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import AvisoLegalContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const title = isCa ? "Avís legal" : "Aviso Legal";
  const description = isCa
    ? "Avís legal del lloc web bertila.es — dades identificatives del titular, condicions d'ús i propietat intel·lectual."
    : "Aviso legal del sitio web bertila.es — datos identificativos del titular, condiciones de uso y propiedad intelectual.";

  return {
    title,
    description,
    keywords: ["aviso legal", "LSSI-CE", "bertila.es"],
    alternates: { canonical: "/aviso-legal" },
    openGraph: {
      title: `${title} | Bertila`,
      description,
      url: "/aviso-legal",
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

export default function AvisoLegalPage() {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: isCa ? "Inici" : "Inicio", url: "/" },
    { name: isCa ? "Avís legal" : "Aviso legal", url: "/aviso-legal" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AvisoLegalContent />
    </>
  );
}

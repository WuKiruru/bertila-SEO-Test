import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import AvisoLegalContent from "./Content";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const title = isCa ? "Avís legal" : "Aviso Legal";
  const description = isCa
    ? "Avis legal del lloc web bertila.es — dades identificatives del titular, condicions d'ús i propietat intel·lectual."
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
  return <AvisoLegalContent />;
}

import type { Metadata } from "next";
import AvisoLegalContent from "./Content";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal del sitio web bertila.es — datos identificativos del titular, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return <AvisoLegalContent />;
}

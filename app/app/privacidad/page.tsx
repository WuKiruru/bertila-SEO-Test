import type { Metadata } from "next";
import PrivacidadContent from "./Content";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de bertila.es — tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return <PrivacidadContent />;
}

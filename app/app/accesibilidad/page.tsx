import type { Metadata } from "next";
import AccesibilidadContent from "./Content";

export const metadata: Metadata = {
  title: "Accesibilidad",
  description:
    "Declaración de accesibilidad del sitio web bertila.es y compromiso con un acceso universal.",
  alternates: { canonical: "/accesibilidad" },
  robots: { index: true, follow: true },
};

export default function AccesibilidadPage() {
  return <AccesibilidadContent />;
}

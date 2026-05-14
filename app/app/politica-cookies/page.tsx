import type { Metadata } from "next";
import PoliticaCookiesContent from "./Content";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies en bertila.es y cómo gestionar tus preferencias.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: true, follow: true },
};

export default function PoliticaCookiesPage() {
  return <PoliticaCookiesContent />;
}

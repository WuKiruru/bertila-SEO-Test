import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const title = isCa
    ? "Bertila — Nuda propietat i vivenda inversa a Catalunya"
    : "Bertila — Nuda propiedad y vivienda inversa en Cataluña";

  return {
    title,
    description: isCa
      ? "Solucions immobiliàries per a majors de 65 anys a Catalunya: nuda propietat, vivenda inversa i hipoteca inversa."
      : "Soluciones inmobiliarias para mayores de 65 años en Cataluña: nuda propiedad, vivienda inversa e hipoteca inversa.",
    keywords: [
      "nuda propiedad",
      "vivienda inversa",
      "hipoteca inversa",
      "personas mayores",
      "Cataluña",
      "Barcelona",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description: isCa
        ? "Converteix la teva vivenda en tranquil·litat sense deixar de viure-hi. Assessorament proper a Catalunya."
        : "Convierte tu vivienda en tranquilidad sin dejar de vivir en ella. Asesoramiento cercano en toda Cataluña.",
      url: "/",
      type: "website",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: isCa
        ? "Bertila — Nuda propietat i vivenda inversa"
        : "Bertila — Nuda propiedad y vivienda inversa",
      description: isCa
        ? "Solucions immobiliàries per a majors de 65 anys a Catalunya."
        : "Soluciones inmobiliarias para mayores de 65 años en Cataluña.",
      images: ["/og-image.jpg"],
    },
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

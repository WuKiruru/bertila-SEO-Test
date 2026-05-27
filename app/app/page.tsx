import type { Metadata } from "next";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import type { Language } from "@/lib/i18n/translations";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildFaqJsonLd } from "@/lib/structured-data";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const contentByLang: Record<Language, { title: string; description: string }> = {
    ca: {
      title: "Nuda propietat i vivenda inversa per a majors de 65 anys",
      description:
        "Assessorament proper a Catalunya per transformar casa teva en tranquil·litat amb nuda propietat, vivenda inversa o hipoteca inversa.",
    },
    es: {
      title: "Nuda propiedad y vivienda inversa para mayores de 65 años",
      description:
        "Asesoramiento cercano en Cataluña para convertir tu vivienda en tranquilidad con nuda propiedad, vivienda inversa o hipoteca inversa.",
    },
  };

  const { title, description } = contentByLang[lang];

  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: SITE_CONFIG.url,
      type: "website",
      images: ["/og-image.jpg"],
    },
  };
}

export default function Home() {
  const lang = getPreferredLanguage();
  const faqJsonLd = buildFaqJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

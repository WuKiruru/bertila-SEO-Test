import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/I18nContext";
import { getPreferredLanguage } from "@/lib/i18n/server-language";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildServicesJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/structured-data";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateMetadata(): Metadata {
  const lang = getPreferredLanguage();
  const isCa = lang === "ca";

  const titleDefault = isCa
    ? "Bertila — Nuda propietat i vivenda inversa a Catalunya"
    : "Bertila — Nuda propiedad y vivienda inversa en Cataluña";

  const description = isCa
    ? "Solucions immobiliàries per a majors de 65 anys a Catalunya: nuda propietat, vivenda inversa i hipoteca inversa."
    : "Soluciones inmobiliarias para mayores de 65 años en Cataluña: nuda propiedad, venta con derecho de alquiler y vivienda inversa. Sigue viviendo en tu casa con tranquilidad.";

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: titleDefault,
      template: "%s | Bertila",
    },
    description,
    keywords: [
      "nuda propiedad",
      "vivienda inversa",
      "venta con derecho de alquiler",
      "personas mayores",
      "Cataluña",
      "Barcelona",
      "inmobiliaria",
      "Bertila",
    ],
    authors: [{ name: SITE_CONFIG.legalName }],
    creator: SITE_CONFIG.legalName,
    publisher: SITE_CONFIG.legalName,
    alternates: {
      canonical: "/",
      languages: {
        "es-ES": "/",
        "ca-ES": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: isCa ? "ca_ES" : "es_ES",
      alternateLocale: isCa ? "es_ES" : "ca_ES",
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: titleDefault,
      description: isCa
        ? "Converteix casa teva en tranquil·litat sense deixar de viure-hi. Assessorament proper per a majors de 65 anys a Catalunya."
        : "Convierte tu casa en tranquilidad sin dejar de vivir en ella. Asesoramiento cercano para mayores de 65 años en toda Cataluña.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isCa
            ? "Bertila — Nuda propietat a Catalunya"
            : "Bertila — Nuda propiedad en Cataluña",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description: isCa
        ? "Solucions immobiliàries per a persones majors a Catalunya."
        : "Soluciones inmobiliarias para personas mayores en Cataluña.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#0A174C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = getPreferredLanguage();
  const jsonLd = buildLocalBusinessJsonLd();
  const organizationJsonLd = buildOrganizationJsonLd();
  const websiteJsonLd = buildWebSiteJsonLd();
  const servicesJsonLd = buildServicesJsonLd();

  return (
    <html lang={lang} className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body className="bg-white text-navy-900 antialiased">
        <I18nProvider>
          {children}
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}

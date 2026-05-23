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
    ? "Nuda propietat i vivenda inversa a Catalunya | Bertila"
    : "Nuda propiedad y vivienda inversa en Cataluña | Bertila";

  const description = isCa
    ? "Nuda propietat, vivenda inversa i hipoteca inversa per a majors de 65 anys a Catalunya. Obtingues diners de casa teva sense deixar de viure-hi."
    : "Nuda propiedad, vivienda inversa e hipoteca inversa para mayores de 65 años en Cataluña. Obtén dinero de tu casa sin dejar de vivir en ella.";

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: titleDefault,
      template: "%s | Bertila",
    },
    description,
    keywords: [
      "nuda propiedad",
      "nuda propiedad Cataluña",
      "nuda propiedad Barcelona",
      "vivienda inversa",
      "venta con derecho de alquiler",
      "hipoteca inversa",
      "hipoteca inversa Cataluña",
      "vender casa siguiendo viviendo",
      "vender casa mayores 65 años",
      "asesoramiento inmobiliario personas mayores",
      "nuda propietat",
      "vivenda inversa",
      "hipoteca inversa Catalunya",
      "Barcelona",
      "Cataluña",
      "Catalunya",
      "Bertila",
    ],
    authors: [{ name: SITE_CONFIG.legalName }],
    creator: SITE_CONFIG.legalName,
    publisher: SITE_CONFIG.legalName,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: isCa ? "ca_ES" : "es_ES",
      alternateLocale: isCa ? "es_ES" : "ca_ES",
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: titleDefault,
      description: isCa
        ? "Converteix casa teva en tranquil·litat sense deixar de viure-hi. Assessorament proper per a majors de 65 anys a tota Catalunya."
        : "Convierte tu casa en tranquilidad sin dejar de vivir en ella. Asesoramiento cercano para mayores de 65 años en toda Cataluña.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isCa
            ? "Bertila — Nuda propietat i vivenda inversa a Catalunya"
            : "Bertila — Nuda propiedad y vivienda inversa en Cataluña",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description: isCa
        ? "Nuda propietat, vivenda inversa i hipoteca inversa per a majors de 65 anys a Catalunya."
        : "Nuda propiedad, vivienda inversa e hipoteca inversa para mayores de 65 años en Cataluña.",
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
        "max-video-preview": -1,
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
    other: {
      "geo.region": "ES-CT",
      "geo.placename": SITE_CONFIG.address.city,
      "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
      ICBM: `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    },
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
  const jsonLd = buildLocalBusinessJsonLd(lang);
  const organizationJsonLd = buildOrganizationJsonLd(lang);
  const websiteJsonLd = buildWebSiteJsonLd(lang);
  const servicesJsonLd = buildServicesJsonLd(lang);

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

import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/I18nContext";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildLocalBusinessJsonLd } from "@/lib/structured-data";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Bertila — Nuda propiedad y vivienda inversa en Cataluña",
    template: "%s | Bertila",
  },
  description:
    "Soluciones inmobiliarias para mayores de 65 años en Cataluña: nuda propiedad, venta con derecho de alquiler y vivienda inversa. Sigue viviendo en tu casa con tranquilidad.",
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
    locale: "es_ES",
    alternateLocale: "ca_ES",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Bertila — Nuda propiedad y vivienda inversa en Cataluña",
    description:
      "Convierte tu casa en tranquilidad sin dejar de vivir en ella. Asesoramiento cercano para mayores de 65 años en toda Cataluña.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bertila — Nuda propiedad en Cataluña",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bertila — Nuda propiedad y vivienda inversa",
    description:
      "Soluciones inmobiliarias para personas mayores en Cataluña.",
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
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

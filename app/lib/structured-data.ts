import { SITE_CONFIG } from "./site-config";

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE_CONFIG.serviceArea,
    },
    knowsLanguage: ["es", "ca"],
    taxID: SITE_CONFIG.nif,
    description:
      "Asesoramiento inmobiliario para personas mayores de 65 años en Cataluña: nuda propiedad, vivienda inversa e hipoteca inversa.",
  };
}

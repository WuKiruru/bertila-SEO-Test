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

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    logo: `${SITE_CONFIG.url}/icon-512.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: ["es-ES", "ca-ES"],
  };
}

export function buildServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Venta de nuda propiedad",
          description:
            "Venta de la nuda propiedad conservando el usufructo y el derecho a vivir en la vivienda de por vida.",
          areaServed: SITE_CONFIG.serviceArea,
          provider: SITE_CONFIG.legalName,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Vivienda inversa",
          description:
            "Venta de la plena propiedad con alquiler vitalicio a coste cero, permaneciendo como inquilino.",
          areaServed: SITE_CONFIG.serviceArea,
          provider: SITE_CONFIG.legalName,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Hipoteca inversa",
          description:
            "Prestamo hipotecario pensado para mayores, con devolucion a cargo de herederos tras el fallecimiento.",
          areaServed: SITE_CONFIG.serviceArea,
          provider: SITE_CONFIG.legalName,
        },
      },
    ],
  };
}

import { SITE_CONFIG } from "./site-config";
import type { Language } from "./i18n/translations";

type Lang = Language;

const LOCAL_DESCRIPTION: Record<Lang, string> = {
  es: "Asesoramiento inmobiliario para personas mayores de 65 años en Cataluña: nuda propiedad, vivienda inversa e hipoteca inversa. Obtén dinero de tu casa sin dejar de vivir en ella.",
  ca: "Assessorament immobiliari per a persones majors de 65 anys a Catalunya: nuda propietat, vivenda inversa i hipoteca inversa. Obtingues diners de casa teva sense deixar de viure-hi.",
};

const SERVICE_LABELS: Record<Lang, Array<{ name: string; description: string; serviceType: string }>> = {
  es: [
    {
      name: "Venta de nuda propiedad",
      serviceType: "Nuda propiedad",
      description:
        "Venta de la nuda propiedad de la vivienda conservando el usufructo vitalicio. El propietario sigue viviendo en su casa de por vida y recibe un capital o renta mensual.",
    },
    {
      name: "Vivienda inversa",
      serviceType: "Vivienda inversa",
      description:
        "Venta de la plena propiedad con alquiler vitalicio a coste cero. El propietario permanece como inquilino sin pagar renta tras descontar el alquiler del precio de venta.",
    },
    {
      name: "Hipoteca inversa",
      serviceType: "Hipoteca inversa",
      description:
        "Préstamo hipotecario para mayores de 65 años con devolución a cargo de los herederos tras el fallecimiento de los titulares. Permite obtener liquidez sin vender la vivienda.",
    },
  ],
  ca: [
    {
      name: "Venda de nuda propietat",
      serviceType: "Nuda propietat",
      description:
        "Venda de la nuda propietat de la vivenda conservant l'usdefruit vitalici. El propietari segueix vivint a casa seva tota la vida i rep un capital o renda mensual.",
    },
    {
      name: "Vivenda inversa",
      serviceType: "Vivenda inversa",
      description:
        "Venda de la plena propietat amb lloguer vitalici a cost zero. El propietari es queda com a llogater sense pagar renda després de descomptar el lloguer del preu de venda.",
    },
    {
      name: "Hipoteca inversa",
      serviceType: "Hipoteca inversa",
      description:
        "Préstec hipotecari per a majors de 65 anys amb devolució a càrrec dels hereus després de la mort dels titulars. Permet obtenir liquiditat sense vendre la vivenda.",
    },
  ],
};

const FAQ_ITEMS: Record<Lang, Array<{ question: string; answer: string }>> = {
  es: [
    {
      question: "¿Qué es la nuda propiedad?",
      answer:
        "La nuda propiedad es el derecho de propiedad sobre una vivienda separado del usufructo. Vendes la nuda propiedad pero conservas el usufructo: sigues viviendo en tu casa de por vida y recibes un capital o renta mensual del comprador.",
    },
    {
      question: "¿Qué diferencia hay entre nuda propiedad y vivienda inversa?",
      answer:
        "En la nuda propiedad vendes solo la propiedad y mantienes el derecho de uso (usufructo) toda la vida. En la vivienda inversa vendes la plena propiedad y te quedas como inquilino con alquiler ya descontado del precio, por lo que vives sin pagar renta de por vida.",
    },
    {
      question: "¿Cómo funciona la hipoteca inversa?",
      answer:
        "La hipoteca inversa es un préstamo hipotecario pensado para mayores de 65 años. La entidad financiera o aseguradora te paga un capital o renta mensual usando tu vivienda como garantía. La deuda se devuelve por los herederos tras el fallecimiento, normalmente vendiendo la casa.",
    },
    {
      question: "¿Puedo seguir viviendo en mi casa si vendo la nuda propiedad?",
      answer:
        "Sí. Al vender solo la nuda propiedad conservas el usufructo vitalicio, lo que te da derecho a vivir en la vivienda toda la vida. Si en algún momento necesitas dejarla, también puedes alquilarla.",
    },
    {
      question: "¿En qué zonas de Cataluña ofreces el servicio?",
      answer:
        "Atiendo en toda Cataluña: Barcelona, Tarragona, Girona y Lleida, incluidos sus pueblos y comarcas. El asesoramiento inicial es siempre sin compromiso.",
    },
  ],
  ca: [
    {
      question: "Què és la nuda propietat?",
      answer:
        "La nuda propietat és el dret de propietat sobre una vivenda separat de l'usdefruit. Vens la nuda propietat però conserves l'usdefruit: segueixes vivint a casa teva tota la vida i reps un capital o renda mensual del comprador.",
    },
    {
      question: "Quina diferència hi ha entre nuda propietat i vivenda inversa?",
      answer:
        "En la nuda propietat vens només la propietat i mantens el dret d'ús (usdefruit) tota la vida. En la vivenda inversa vens la plena propietat i et quedes com a llogater amb el lloguer ja descomptat del preu, de manera que vius sense pagar renda tota la vida.",
    },
    {
      question: "Com funciona la hipoteca inversa?",
      answer:
        "La hipoteca inversa és un préstec hipotecari pensat per a majors de 65 anys. L'entitat financera o asseguradora et paga un capital o renda mensual fent servir la teva vivenda com a garantia. El deute el tornen els hereus després de la mort, normalment venent la casa.",
    },
    {
      question: "Puc seguir vivint a casa meva si venc la nuda propietat?",
      answer:
        "Sí. En vendre només la nuda propietat conserves l'usdefruit vitalici, que et dóna dret a viure a la vivenda tota la vida. Si en algun moment l'has de deixar, també la pots llogar.",
    },
    {
      question: "A quines zones de Catalunya ofereixes el servei?",
      answer:
        "Atenc a tota Catalunya: Barcelona, Tarragona, Girona i Lleida, incloent-hi pobles i comarques. L'assessorament inicial sempre és sense compromís.",
    },
  ],
};

export function getFaqItems(lang: Lang) {
  return FAQ_ITEMS[lang];
}

const POSTAL_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: SITE_CONFIG.address.street,
  addressLocality: SITE_CONFIG.address.city,
  addressRegion: SITE_CONFIG.address.region,
  postalCode: SITE_CONFIG.address.postalCode,
  addressCountry: SITE_CONFIG.address.country,
};

export function buildLocalBusinessJsonLd(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/icon-512.png`,
    priceRange: SITE_CONFIG.priceRange,
    address: POSTAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    knowsLanguage: ["es", "ca"],
    knowsAbout: [
      "Nuda propiedad",
      "Vivienda inversa",
      "Hipoteca inversa",
      "Venta con derecho de alquiler",
      "Personas mayores de 65 años",
      "Asesoramiento inmobiliario",
    ],
    taxID: SITE_CONFIG.nif,
    description: LOCAL_DESCRIPTION[lang],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "ca" ? "Serveis" : "Servicios",
      itemListElement: SERVICE_LABELS[lang].map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          serviceType: s.serviceType,
          description: s.description,
          provider: { "@id": `${SITE_CONFIG.url}/#business` },
          areaServed: SITE_CONFIG.serviceArea,
        },
      })),
    },
  };
}

export function buildOrganizationJsonLd(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    address: POSTAL_ADDRESS,
    areaServed: SITE_CONFIG.serviceArea,
    description: LOCAL_DESCRIPTION[lang],
  };
}

export function buildWebSiteJsonLd(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: lang === "ca" ? "ca-ES" : "es-ES",
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
  };
}

export function buildServicesJsonLd(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICE_LABELS[lang].map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: s.name,
        serviceType: s.serviceType,
        description: s.description,
        areaServed: SITE_CONFIG.serviceArea,
        provider: { "@id": `${SITE_CONFIG.url}/#business` },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 65,
        },
      },
    })),
  };
}

export function buildFaqJsonLd(lang: Lang = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS[lang].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

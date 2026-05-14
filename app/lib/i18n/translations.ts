export type Language = "es" | "ca";

export const SUPPORTED_LANGUAGES: Language[] = ["es", "ca"];
export const DEFAULT_LANGUAGE: Language = "es";

type TranslationValue =
  | string
  | number
  | string[]
  | TranslationDict
  | TranslationDict[];
type TranslationDict = {
  [key: string]: TranslationValue;
};

export const translations: Record<Language, TranslationDict> = {
  es: {
    nav: {
      about: "Quién soy",
      services: "Servicios",
      testimonials: "Clientes",
      contact: "Contacto",
      cta: "Llámame",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      langSwitch: "Cambiar a catalán",
    },
    hero: {
      eyebrow: "Ayuda inmobiliaria para mayores de 65 años",
      title: "Asesoramiento Inmobiliario en Cataluña",
      subtitle: "Tu vivienda puede ayudarte a vivir con más tranquilidad.",
      ctaCall: "Llámame ahora",
      ctaLearn: "Ver mis servicios",
      imageAlt: "",
    },
    about: {
      eyebrow: "Quién soy",
      title: "Bertila",
      paragraph1:
        "Acompaño a personas mayores de 65 años que quieren obtener un dinero de su vivienda sin tener que dejar su casa.",
      paragraph2:
        "Te explicaré las opciones que tienes de manera fácil y sencilla para que entiendas perfectamente y puedas tomar la mejor decisión.",
      paragraph3: "Te informo sin ningún compromiso.",
      portraitAlt: "Foto profesional de Bertila",
    },
    services: {
      eyebrow: "Servicios",
      title: "Tres formas de obtener dinero de tu vivienda",
      subtitle:
        "Te las explico aquí en pocas palabras. Cuando hablemos te lo cuento todo con detalle.",
      cards: {
        nuda: {
          title: "Venta de Nuda Propiedad",
          description:
            "Cualquier casa o piso se divide en nuda propiedad y usufructo. En este caso venderíamos la nuda propiedad y usted se quedaría con el uso y disfrute de la vivienda para toda la vida. Si se tuviera que ir de su casa por algún motivo, también tendría derecho a alquilarla.",
        },
        vivienda: {
          title: "Vivienda Inversa",
          description:
            "En este caso venderíamos la plena propiedad y usted se quedaría como inquilino. En el precio de venta ya habremos descontado los alquileres, por lo que usted tendrá alquiler a precio cero durante toda la vida.",
        },
        hipoteca: {
          title: "Hipoteca Inversa",
          description:
            "Es un préstamo hipotecario que le haría una entidad financiera o una aseguradora. Este préstamo está pensado para que lo devuelvan sus hijos o herederos tras el fallecimiento de los titulares.",
        },
      },
    },
    testimonials: {
      eyebrow: "Clientes",
      title: "Personas reales, decisiones tranquilas",
      subtitle:
        "Algunas de las personas que ya han mejorado su día a día sin dejar su hogar.",
      items: [
        {
          name: "Ramón",
          age: 66,
          neighborhood: "Barcelona",
          photo: "",
          quote:
            "Vendió la nuda propiedad de su piso de Barcelona a cambio de recibir una renta mensual vitalicia. Ahora puede seguir aumentando su colección de productos de cine y arte con tranquilidad.",
        },
        {
          name: "Elvira",
          age: 71,
          neighborhood: "Abrera (Barcelona)",
          photo: "/elvirabertila.webp",
          quote:
            "Al vender la nuda propiedad me permite vivir ya muy tranquila en mi casa, y además puedo ayudar también a mi hija para que viva mejor y sin deudas.",
        },
        {
          name: "Antonia",
          age: 88,
          neighborhood: "Sants, Barcelona",
          photo: "/antoniabertila.webp",
          quote:
            "Quería vivir disponiendo de más dinero para tener una vida más cómoda y confortable, y con la seguridad económica de percibir más ingresos cada mes.",
        },
        {
          name: "Josep",
          age: 68,
          neighborhood: "Poblenou, Barcelona",
          photo: "",
          quote:
            "He vendido mi casa para tener dinero disponible y complementar mi pensión, y así puedo también ayudar a mi hermano.",
        },
        {
          name: "Frederic",
          age: 83,
          neighborhood: "La Garriga (Barcelona)",
          photo: "/fredericbertilaa.webp",
          quote:
            "Vendió la nuda propiedad de su vivienda de La Garriga a cambio de un importe inicial y de una renta mensual. Es responsable de pagar la residencia de su hermano y ahora puede seguir haciéndolo con tranquilidad y sin moverse de su hogar.",
        },
      ],
      photoAlt: "Foto del cliente",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Llámame y hablamos",
      subtitle: "Te informo sin compromiso.",
      callLabel: "Llamar",
      emailLabel: "Escribirme",
      phone: "+34 610 69 85 23",
      email: "bertypala@gmail.com",
    },
    footer: {
      tagline:
        "Asesoramiento inmobiliario para personas mayores de 65 años en Cataluña.",
      navTitle: "Páginas",
      legalTitle: "Información legal",
      contactTitle: "Contacto",
      copyright: "Bertila. Todos los derechos reservados.",
      legal: {
        privacy: "Política de privacidad",
        legal: "Aviso legal",
        cookies: "Política de cookies",
        accessibility: "Accesibilidad",
      },
    },
    cookies: {
      title: "Esta web utiliza cookies",
      message:
        "Utilizamos cookies técnicas para que la web funcione bien. Puedes aceptar o rechazar las opcionales.",
      accept: "Aceptar",
      reject: "Rechazar",
      more: "Más información",
    },
    legal: {
      back: "Volver a la página principal",
      lastUpdated: "Última actualización",
    },
  },
  ca: {
    nav: {
      about: "Qui sóc",
      services: "Serveis",
      testimonials: "Clients",
      contact: "Contacte",
      cta: "Truca'm",
      menuOpen: "Obrir menú",
      menuClose: "Tancar menú",
      langSwitch: "Canviar a castellà",
    },
    hero: {
      eyebrow: "Ajuda immobiliària per a majors de 65 anys",
      title: "Assessorament Immobiliari a Catalunya",
      subtitle: "La teva casa pot ajudar-te a viure amb més tranquil·litat.",
      ctaCall: "Truca'm ara",
      ctaLearn: "Veure els serveis",
      imageAlt: "",
    },
    about: {
      eyebrow: "Qui sóc",
      title: "Bertila",
      paragraph1:
        "Acompanyo persones majors de 65 anys que volen obtenir uns diners de la seva vivenda sense haver de deixar la casa.",
      paragraph2:
        "T'explicaré les opcions que tens de manera fàcil i senzilla perquè ho entenguis perfectament i puguis prendre la millor decisió.",
      paragraph3: "T'informo sense cap compromís.",
      portraitAlt: "Foto professional de la Bertila",
    },
    services: {
      eyebrow: "Serveis",
      title: "Tres maneres d'obtenir diners de casa teva",
      subtitle:
        "T'ho explico aquí en poques paraules. Quan parlem t'ho explico tot amb detall.",
      cards: {
        nuda: {
          title: "Venda de Nuda Propietat",
          description:
            "Qualsevol casa o pis es divideix en nuda propietat i usdefruit. En aquest cas vendríem la nuda propietat i vostè es quedaria amb l'ús i gaudi de la vivenda per a tota la vida. Si s'hagués de marxar de casa per algun motiu, també tindria dret a llogar-la.",
        },
        vivienda: {
          title: "Vivenda Inversa",
          description:
            "En aquest cas vendríem la plena propietat i vostè es quedaria com a llogater. Del preu de venda ja n'haurem descomptat els lloguers, de manera que vostè tindrà lloguer a preu zero durant tota la vida.",
        },
        hipoteca: {
          title: "Hipoteca Inversa",
          description:
            "És un préstec hipotecari que li faria una entitat financera o una asseguradora. Aquest préstec està pensat perquè el tornin els seus fills o hereus després de la mort dels titulars.",
        },
      },
    },
    testimonials: {
      eyebrow: "Clients",
      title: "Persones reals, decisions tranquil·les",
      subtitle:
        "Algunes de les persones que ja han millorat el seu dia a dia sense deixar la seva llar.",
      items: [
        {
          name: "Ramón",
          age: 66,
          neighborhood: "Barcelona",
          photo: "",
          quote:
            "Va vendre la nuda propietat del seu pis de Barcelona a canvi de rebre una renda mensual vitalícia. Ara pot continuar ampliant la seva col·lecció de productes de cinema i art amb tranquil·litat.",
        },
        {
          name: "Elvira",
          age: 71,
          neighborhood: "Abrera (Barcelona)",
          photo: "/elvirabertila.webp",
          quote:
            "Vendre la nuda propietat em permet viure ja molt tranquil·la a casa meva, i a més puc ajudar també la meva filla perquè visqui millor i sense deutes.",
        },
        {
          name: "Antonia",
          age: 88,
          neighborhood: "Sants, Barcelona",
          photo: "/antoniabertila.webp",
          quote:
            "Volia viure disposant de més diners per tenir una vida més còmoda i confortable, i amb la seguretat econòmica de rebre més ingressos cada mes.",
        },
        {
          name: "Josep",
          age: 68,
          neighborhood: "Poblenou, Barcelona",
          photo: "",
          quote:
            "He venut la meva casa per tenir diners disponibles i complementar la meva pensió, i així puc ajudar també el meu germà.",
        },
        {
          name: "Frederic",
          age: 83,
          neighborhood: "La Garriga (Barcelona)",
          photo: "/fredericbertilaa.webp",
          quote:
            "Va vendre la nuda propietat de la seva vivenda de La Garriga a canvi d'un import inicial i d'una renda mensual. És el responsable de pagar la residència del seu germà i ara pot seguir fent-ho amb tranquil·litat i sense moure's de casa.",
        },
      ],
      photoAlt: "Foto del client",
    },
    contact: {
      eyebrow: "Contacte",
      title: "Truca'm i en parlem",
      subtitle: "T'informo sense compromís.",
      callLabel: "Trucar",
      emailLabel: "Escriure'm",
      phone: "+34 610 69 85 23",
      email: "bertypala@gmail.com",
    },
    footer: {
      tagline:
        "Assessorament immobiliari per a persones majors de 65 anys a Catalunya.",
      navTitle: "Pàgines",
      legalTitle: "Informació legal",
      contactTitle: "Contacte",
      copyright: "Bertila. Tots els drets reservats.",
      legal: {
        privacy: "Política de privacitat",
        legal: "Avís legal",
        cookies: "Política de cookies",
        accessibility: "Accessibilitat",
      },
    },
    cookies: {
      title: "Aquest web utilitza galetes",
      message:
        "Utilitzem galetes tècniques perquè el web funcioni bé. Pots acceptar o rebutjar les opcionals.",
      accept: "Accepta",
      reject: "Rebutja",
      more: "Més informació",
    },
    legal: {
      back: "Tornar a la pàgina principal",
      lastUpdated: "Última actualització",
    },
  },
};

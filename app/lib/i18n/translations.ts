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
      faq: "Preguntas",
      contact: "Contacto",
      cta: "Llámame",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      langSwitch: "Cambiar a catalán",
    },
    hero: {
      eyebrow: "Ayuda inmobiliaria para mayores de 65 años",
      title: "Nuda propiedad y vivienda inversa en Cataluña",
      subtitle:
        "Obtén dinero de tu vivienda sin dejar de vivir en ella. Te asesoro de forma cercana y sin compromiso en toda Cataluña.",
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
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Resuelve tus dudas sobre nuda propiedad",
      subtitle:
        "Las preguntas más habituales sobre nuda propiedad, vivienda inversa e hipoteca inversa.",
      items: [
        {
          question: "¿Qué es la nuda propiedad?",
          answer:
            "La nuda propiedad es el derecho de propiedad sobre una vivienda separado del usufructo. Vendes la nuda propiedad pero conservas el usufructo: sigues viviendo en tu casa de por vida y recibes un capital o renta mensual del comprador.",
        },
        {
          question:
            "¿Qué diferencia hay entre nuda propiedad y vivienda inversa?",
          answer:
            "En la nuda propiedad vendes solo la propiedad y mantienes el derecho de uso (usufructo) toda la vida. En la vivienda inversa vendes la plena propiedad y te quedas como inquilino con el alquiler ya descontado del precio, por lo que vives sin pagar renta de por vida.",
        },
        {
          question: "¿Cómo funciona la hipoteca inversa?",
          answer:
            "La hipoteca inversa es un préstamo hipotecario pensado para mayores de 65 años. La entidad financiera o aseguradora te paga un capital o renta mensual usando tu vivienda como garantía. La deuda se devuelve por los herederos tras el fallecimiento, normalmente vendiendo la casa.",
        },
        {
          question:
            "¿Puedo seguir viviendo en mi casa si vendo la nuda propiedad?",
          answer:
            "Sí. Al vender solo la nuda propiedad conservas el usufructo vitalicio, lo que te da derecho a vivir en la vivienda toda la vida. Si en algún momento necesitas dejarla, también puedes alquilarla.",
        },
        {
          question: "¿En qué zonas de Cataluña ofreces el servicio?",
          answer:
            "Atiendo en toda Cataluña: Barcelona, Tarragona, Girona y Lleida, incluidos sus pueblos y comarcas. El asesoramiento inicial es siempre sin compromiso.",
        },
      ],
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
      more: "Leer la política de cookies",
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
      faq: "Preguntes",
      contact: "Contacte",
      cta: "Truca'm",
      menuOpen: "Obrir menú",
      menuClose: "Tancar menú",
      langSwitch: "Canviar a castellà",
    },
    hero: {
      eyebrow: "Ajuda immobiliària per a majors de 65 anys",
      title: "Nuda propietat i vivenda inversa a Catalunya",
      subtitle:
        "Obtingues diners de casa teva sense deixar de viure-hi. T'assessoro de manera propera i sense compromís a tota Catalunya.",
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
    faq: {
      eyebrow: "Preguntes freqüents",
      title: "Resol els teus dubtes sobre la nuda propietat",
      subtitle:
        "Les preguntes més habituals sobre nuda propietat, vivenda inversa i hipoteca inversa.",
      items: [
        {
          question: "Què és la nuda propietat?",
          answer:
            "La nuda propietat és el dret de propietat sobre una vivenda separat de l'usdefruit. Vens la nuda propietat però conserves l'usdefruit: segueixes vivint a casa teva tota la vida i reps un capital o renda mensual del comprador.",
        },
        {
          question:
            "Quina diferència hi ha entre nuda propietat i vivenda inversa?",
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
      more: "Llegir la política de galetes",
    },
    legal: {
      back: "Tornar a la pàgina principal",
      lastUpdated: "Última actualització",
    },
  },
};

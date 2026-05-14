"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { LegalPageShell } from "@/components/LegalPageShell";
import { SITE_CONFIG } from "@/lib/site-config";

export default function AccesibilidadContent() {
  const { lang } = useI18n();
  const isCa = lang === "ca";

  return (
    <LegalPageShell
      titleEs="Declaración de Accesibilidad"
      titleCa="Declaració d'Accessibilitat"
      lastUpdatedEs="8 de mayo de 2026"
      lastUpdatedCa="8 de maig de 2026"
    >
      <p>
        {isCa
          ? `${SITE_CONFIG.legalName} es compromet a fer accessible el seu lloc web, conforme a les Pautes d'Accessibilitat per al Contingut Web (WCAG) 2.1, nivell AA, i a la legislació aplicable en matèria d'accessibilitat dels llocs web del sector privat a Espanya.`
          : `${SITE_CONFIG.legalName} se compromete a hacer accesible su sitio web, conforme a las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA, y a la legislación aplicable en materia de accesibilidad de los sitios web del sector privado en España.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "1. Estat de compliment" : "1. Estado de cumplimiento"}
      </h2>
      <p>
        {isCa ? (
          <>
            Aquest lloc web és <strong>parcialment conforme</strong> amb les Pautes WCAG 2.1
            nivell AA. Treballem de manera continua per identificar i corregir les barreres
            detectades.
          </>
        ) : (
          <>
            Este sitio web es <strong>parcialmente conforme</strong> con las Pautas WCAG 2.1
            nivel AA. Trabajamos de forma continua para identificar y corregir las barreras
            detectadas.
          </>
        )}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "2. Mesures adoptades" : "2. Medidas adoptadas"}
      </h2>
      <ul className="list-disc pl-6">
        <li>
          {isCa
            ? "Estructura semàntica de capçaleres (H1, H2, H3) i ús de regions (header, main, footer)."
            : "Estructura semántica de encabezados (H1, H2, H3) y uso de regiones (header, main, footer)."}
        </li>
        <li>
          {isCa
            ? "Imatges amb text alternatiu descriptiu quan aporten informació."
            : "Imágenes con texto alternativo descriptivo cuando aportan información."}
        </li>
        <li>
          {isCa
            ? "Contrast de colors adequat entre text i fons."
            : "Contraste de colores adecuado entre texto y fondo."}
        </li>
        <li>
          {isCa
            ? "Navegació amb teclat i focus visible mitjançant anell d'enfocament."
            : "Navegación con teclado y foco visible mediante anillo de enfoque."}
        </li>
        <li>
          {isCa
            ? "Disseny responsive adaptat a mòbil, tauleta i escriptori, amb tipografia llegible i mides adaptables."
            : "Diseño responsive adaptado a móvil, tablet y escritorio, con tipografía legible y tamaños adaptables."}
        </li>
        <li>
          {isCa ? (
            <>
              Suport per a la preferència <em>prefers-reduced-motion</em> reduint o eliminant les
              animacions quan el sistema ho sol·licita.
            </>
          ) : (
            <>
              Soporte para la preferencia <em>prefers-reduced-motion</em> reduciendo o eliminando
              las animaciones cuando el sistema lo solicita.
            </>
          )}
        </li>
        <li>
          {isCa ? (
            <>Idioma del document declarat mitjançant l'atribut <code>lang</code>.</>
          ) : (
            <>Idioma del documento declarado mediante el atributo <code>lang</code>.</>
          )}
        </li>
        <li>
          {isCa
            ? "Disponibilitat del contingut principal en castellà i català."
            : "Disponibilidad del contenido principal en castellano y catalán."}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "3. Contingut no accessible" : "3. Contenido no accesible"}
      </h2>
      <p>
        {isCa
          ? "Alguns continguts poden no complir plenament tots els criteris WCAG 2.1 AA. En particular, certs elements decoratius poden no incloure descripcions equivalents i algunes animacions podrien afectar persones amb sensibilitat al moviment, tot i que s'han adoptat mesures per minimitzar aquest impacte."
          : "Algunos contenidos pueden no cumplir plenamente todos los criterios WCAG 2.1 AA. En particular, ciertos elementos decorativos pueden no incluir descripciones equivalentes y algunas animaciones podrían afectar a personas con sensibilidad al movimiento, aunque se han adoptado medidas para minimizar este impacto."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa
          ? "4. Comunicar problemes d'accessibilitat"
          : "4. Comunicar problemas de accesibilidad"}
      </h2>
      <p>
        {isCa
          ? "Si trobeu alguna dificultat d'accés o voleu proposar una millora, podeu posar-vos en contacte amb nosaltres i us atendrem personalment:"
          : "Si encuentra alguna dificultad de acceso o desea proponer una mejora, puede ponerse en contacto con nosotros y le atenderemos personalmente:"}
      </p>
      <ul className="list-disc pl-6">
        <li>
          {isCa ? "Correu electrònic: " : "Correo electrónico: "}
          <a className="underline" href={`mailto:${SITE_CONFIG.email}`}>
            {SITE_CONFIG.email}
          </a>
        </li>
        <li>
          {isCa ? "Telèfon: " : "Teléfono: "}
          <a className="underline" href={`tel:${SITE_CONFIG.phoneTel}`}>
            {SITE_CONFIG.phone}
          </a>
        </li>
      </ul>
      <p>
        {isCa
          ? "Procurarem respondre en un termini raonable i, si escau, oferir la informació sol·licitada en un format alternatiu accessible."
          : "Procuraremos responder en un plazo razonable y, en su caso, ofrecer la información solicitada en un formato alternativo accesible."}
      </p>
    </LegalPageShell>
  );
}

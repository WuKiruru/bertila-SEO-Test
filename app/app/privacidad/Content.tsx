"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { LegalPageShell } from "@/components/LegalPageShell";
import { SITE_CONFIG } from "@/lib/site-config";

export default function PrivacidadContent() {
  const { lang } = useI18n();
  const isCa = lang === "ca";

  return (
    <LegalPageShell
      titleEs="Política de Privacidad"
      titleCa="Política de Privacitat"
      lastUpdatedEs="8 de mayo de 2026"
      lastUpdatedCa="8 de maig de 2026"
    >
      <p>
        {isCa
          ? `En compliment del Reglament (UE) 2016/679, General de Protecció de Dades (RGPD), i de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals (LOPDGDD), ${SITE_CONFIG.legalName} informa els usuaris del lloc web ${SITE_CONFIG.url} sobre el tractament de les dades personals que voluntàriament ens facilitin en utilitzar aquest lloc web o posar-se en contacte a través dels canals publicats.`
          : `En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), ${SITE_CONFIG.legalName} informa a los usuarios del sitio web ${SITE_CONFIG.url} sobre el tratamiento de los datos personales que voluntariamente nos faciliten al utilizar este sitio web o ponerse en contacto a través de los canales publicados.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "1. Responsable del tractament" : "1. Responsable del tratamiento"}
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>{isCa ? "Identitat:" : "Identidad:"}</strong> {SITE_CONFIG.legalName}
        </li>
        <li>
          <strong>NIF:</strong> {SITE_CONFIG.nif}
        </li>
        <li>
          <strong>{isCa ? "Adreça postal:" : "Dirección postal:"}</strong>{" "}
          {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city},{" "}
          {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.province}
        </li>
        <li>
          <strong>{isCa ? "Correu electrònic:" : "Correo electrónico:"}</strong>{" "}
          {SITE_CONFIG.email}
        </li>
        <li>
          <strong>{isCa ? "Telèfon:" : "Teléfono:"}</strong> {SITE_CONFIG.phone}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "2. Dades que tractem" : "2. Datos que tratamos"}
      </h2>
      <p>
        {isCa
          ? "Tractem únicament les dades personals que l'usuari ens proporciona voluntàriament en contactar-nos per telèfon o correu electrònic. Habitualment:"
          : "Únicamente tratamos los datos personales que el usuario nos proporciona voluntariamente al contactarnos por teléfono o correo electrónico. Habitualmente:"}
      </p>
      <ul className="list-disc pl-6">
        <li>
          {isCa
            ? "Dades identificatives: nom i cognoms."
            : "Datos identificativos: nombre y apellidos."}
        </li>
        <li>
          {isCa
            ? "Dades de contacte: telèfon i correu electrònic."
            : "Datos de contacto: teléfono y correo electrónico."}
        </li>
        <li>
          {isCa
            ? "Qualsevol altra dada que l'usuari ens comuniqui en el marc de la seva consulta."
            : "Cualquier otro dato que el usuario nos comunique en el marco de su consulta."}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "3. Finalitat del tractament" : "3. Finalidad del tratamiento"}
      </h2>
      <ul className="list-disc pl-6">
        <li>
          {isCa
            ? "Atendre les consultes, peticions i sol·licituds d'informació rebudes."
            : "Atender las consultas, peticiones y solicitudes de información recibidas."}
        </li>
        <li>
          {isCa
            ? "Prestar els serveis d'assessorament immobiliari sol·licitats (nuda propietat, vivenda inversa, hipoteca inversa)."
            : "Prestar los servicios de asesoramiento inmobiliario solicitados (nuda propiedad, vivienda inversa, hipoteca inversa)."}
        </li>
        <li>
          {isCa
            ? "Gestió administrativa i, si escau, comptable i fiscal derivada de la prestació de serveis."
            : "Gestión administrativa y, en su caso, contable y fiscal derivada de la prestación de servicios."}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "4. Base jurídica" : "4. Base jurídica"}
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>{isCa ? "Consentiment de l'interessat" : "Consentimiento del interesado"}</strong>{" "}
          (art. 6.1.a RGPD), {isCa ? "prestat en posar-se en contacte amb nosaltres." : "prestado al ponerse en contacto con nosotros."}
        </li>
        <li>
          <strong>{isCa ? "Execució d'un contracte" : "Ejecución de un contrato"}</strong>{" "}
          {isCa
            ? "o aplicació de mesures precontractuals (art. 6.1.b RGPD) quan es contractin els nostres serveis."
            : "o aplicación de medidas precontractuales (art. 6.1.b RGPD) cuando se contraten nuestros servicios."}
        </li>
        <li>
          <strong>
            {isCa ? "Compliment d'obligacions legals" : "Cumplimiento de obligaciones legales"}
          </strong>{" "}
          (art. 6.1.c RGPD){" "}
          {isCa
            ? "en matèria fiscal, mercantil o civil."
            : "en materia fiscal, mercantil o civil."}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "5. Conservació de les dades" : "5. Conservación de los datos"}
      </h2>
      <p>
        {isCa
          ? "Les dades es conservaran mentre es mantingui la relació professional i, posteriorment, durant els terminis legalment establerts per atendre possibles responsabilitats derivades del tractament. Les consultes que no derivin en relació contractual s'eliminaran transcorregut un termini raonable."
          : "Los datos se conservarán mientras se mantenga la relación profesional y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades derivadas del tratamiento. Las consultas que no deriven en relación contractual se eliminarán transcurrido un plazo razonable."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "6. Destinataris i cessions" : "6. Destinatarios y cesiones"}
      </h2>
      <p>
        {isCa
          ? "No es cediran dades a tercers excepte per obligació legal. En el marc dels serveis que prestem, les dades es podran comunicar a notaries, entitats financeres i altres professionals necessaris per a l'operació, sempre que sigui estrictament necessari per a l'operació sol·licitada pel client i amb informació prèvia a l'interessat."
          : "No se cederán datos a terceros salvo obligación legal. En el marco de los servicios que prestamos, los datos podrán comunicarse a notarías, entidades financieras y otros profesionales necesarios para la operación, siempre que sea estrictamente necesario para la operación solicitada por el cliente y previa información al interesado."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "7. Drets de l'interessat" : "7. Derechos del interesado"}
      </h2>
      <p>
        {isCa
          ? "L'usuari pot exercir en qualsevol moment els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, així com retirar el consentiment prestat, dirigint-se per escrit a l'adreça postal o al correu electrònic indicats a l'apartat 1. També pot presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es)."
          : "El usuario puede ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento prestado, dirigiéndose por escrito a la dirección postal o al correo electrónico indicados en el apartado 1. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "8. Mesures de seguretat" : "8. Medidas de seguridad"}
      </h2>
      <p>
        {isCa
          ? `${SITE_CONFIG.legalName} aplica les mesures tècniques i organitzatives apropiades per garantir un nivell de seguretat adequat al risc del tractament, conforme a l'article 32 del RGPD.`
          : `${SITE_CONFIG.legalName} aplica las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo del tratamiento, conforme al artículo 32 del RGPD.`}
      </p>
    </LegalPageShell>
  );
}

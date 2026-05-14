"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { LegalPageShell } from "@/components/LegalPageShell";
import { SITE_CONFIG } from "@/lib/site-config";

export default function AvisoLegalContent() {
  const { lang } = useI18n();
  const isCa = lang === "ca";

  return (
    <LegalPageShell
      titleEs="Aviso Legal"
      titleCa="Avís Legal"
      lastUpdatedEs="8 de mayo de 2026"
      lastUpdatedCa="8 de maig de 2026"
    >
      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "1. Dades identificatives del titular" : "1. Datos identificativos del titular"}
      </h2>
      <p>
        {isCa
          ? "En compliment del deure d'informació recollit a l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'ofereixen tot seguit les dades identificatives de la titular d'aquest lloc web:"
          : "En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ofrecen a continuación los datos identificativos de la titular del presente sitio web:"}
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>{isCa ? "Titular:" : "Titular:"}</strong> {SITE_CONFIG.legalName}
        </li>
        <li>
          <strong>NIF:</strong> {SITE_CONFIG.nif}
        </li>
        <li>
          <strong>{isCa ? "Domicili:" : "Domicilio:"}</strong> {SITE_CONFIG.address.street},{" "}
          {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postalCode}{" "}
          {SITE_CONFIG.address.province}
        </li>
        <li>
          <strong>{isCa ? "Correu electrònic:" : "Correo electrónico:"}</strong>{" "}
          {SITE_CONFIG.email}
        </li>
        <li>
          <strong>{isCa ? "Telèfon:" : "Teléfono:"}</strong> {SITE_CONFIG.phone}
        </li>
        <li>
          <strong>{isCa ? "Lloc web:" : "Sitio web:"}</strong> {SITE_CONFIG.url}
        </li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "2. Objecte" : "2. Objeto"}
      </h2>
      <p>
        {isCa
          ? `El present Avís Legal regula l'ús del lloc web ${SITE_CONFIG.url} (en endavant, el "Lloc Web"), del qual és titular ${SITE_CONFIG.legalName}. La navegació pel Lloc Web atribueix la condició d'usuari del mateix i implica l'acceptació plena i sense reserves de totes i cadascuna de les disposicions incloses en aquest Avís Legal en la versió publicada en el moment en què l'usuari hi accedeix.`
          : `El presente Aviso Legal regula el uso del sitio web ${SITE_CONFIG.url} (en adelante, el "Sitio Web"), del que es titular ${SITE_CONFIG.legalName}. La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal en la versión publicada en el momento en que el usuario acceda.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "3. Condicions d'ús" : "3. Condiciones de uso"}
      </h2>
      <p>
        {isCa
          ? "L'usuari es compromet a fer un ús adequat i lícit dels continguts i serveis oferts mitjançant el Lloc Web, abstenint-se d'utilitzar-los per incórrer en activitats il·lícites, lesives de drets i interessos de tercers, o que puguin malmetre, inutilitzar, sobrecarregar o deteriorar el Lloc Web."
          : "El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y servicios ofrecidos a través del Sitio Web, absteniéndose de utilizarlos para incurrir en actividades ilícitas, lesivas de derechos e intereses de terceros, o que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web."}
      </p>
      <p>
        {isCa
          ? "La titular es reserva el dret de modificar, en qualsevol moment i sense avís previ, la presentació i configuració del Lloc Web, així com els continguts i els serveis que s'hi incorporen."
          : "La titular se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación y configuración del Sitio Web, así como los contenidos y los servicios que en él se incorporan."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "4. Propietat intel·lectual i industrial" : "4. Propiedad intelectual e industrial"}
      </h2>
      <p>
        {isCa
          ? `Tots els continguts del Lloc Web (textos, fotografies, gràfics, imatges, icones, tecnologia, programari, així com el seu disseny gràfic i codis font) són propietat intel·lectual de ${SITE_CONFIG.legalName} o de tercers que n'han autoritzat l'ús. Queda prohibida qualsevol reproducció, distribució, comunicació pública o transformació sense autorització prèvia i per escrit.`
          : `Todos los contenidos del Sitio Web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente) son propiedad intelectual de ${SITE_CONFIG.legalName} o de terceros que han autorizado su uso. Queda prohibida cualquier reproducción, distribución, comunicación pública o transformación sin autorización previa y por escrito.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "5. Exclusió de garanties i responsabilitat" : "5. Exclusión de garantías y responsabilidad"}
      </h2>
      <p>
        {isCa
          ? `${SITE_CONFIG.legalName} no garanteix la inexistència d'errors en l'accés al Lloc Web, en el seu contingut ni que aquest estigui actualitzat. Procurarà, en la mesura del possible, evitar aquests errors, esmenar-los o actualitzar el contingut quan correspongui. Tant l'accés al Lloc Web com l'ús no consentit que es pugui fer de la informació continguda és responsabilitat exclusiva de qui el realitza.`
          : `${SITE_CONFIG.legalName} no garantiza la inexistencia de errores en el acceso al Sitio Web, en su contenido ni que éste se encuentre actualizado. Procurará, en la medida de lo posible, evitar dichos errores, subsanarlos o actualizar el contenido cuando proceda. Tanto el acceso al Sitio Web como el uso no consentido que pueda efectuarse de la información contenida en él es de exclusiva responsabilidad de quien lo realiza.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "6. Enllaços a tercers" : "6. Enlaces a terceros"}
      </h2>
      <p>
        {isCa
          ? `El Lloc Web pot contenir enllaços a pàgines web de tercers, sobre les quals ${SITE_CONFIG.legalName} no exerceix cap control i respecte de les quals declina qualsevol responsabilitat sobre els seus continguts.`
          : `El Sitio Web puede contener enlaces a páginas web de terceros, sobre las cuales ${SITE_CONFIG.legalName} no ejerce ningún control y respecto de las cuales declina cualquier responsabilidad sobre sus contenidos.`}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "7. Legislació aplicable i jurisdicció" : "7. Legislación aplicable y jurisdicción"}
      </h2>
      <p>
        {isCa
          ? "El present Avís Legal es regeix per la legislació espanyola. Per a la resolució de qualsevol conflicte que es pugui derivar de l'accés al Lloc Web, les parts se sotmeten als Jutjats i Tribunals del domicili de l'usuari, quan aquest sigui consumidor."
          : "El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier conflicto que pudiera derivarse del acceso al Sitio Web, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario, cuando éste sea consumidor."}
      </p>
    </LegalPageShell>
  );
}

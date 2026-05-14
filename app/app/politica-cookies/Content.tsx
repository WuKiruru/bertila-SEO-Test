"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { LegalPageShell } from "@/components/LegalPageShell";
import { SITE_CONFIG } from "@/lib/site-config";

export default function PoliticaCookiesContent() {
  const { lang } = useI18n();
  const isCa = lang === "ca";

  return (
    <LegalPageShell
      titleEs="Política de Cookies"
      titleCa="Política de Galetes"
      lastUpdatedEs="8 de mayo de 2026"
      lastUpdatedCa="8 de maig de 2026"
    >
      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "1. Què són les galetes?" : "1. ¿Qué son las cookies?"}
      </h2>
      <p>
        {isCa
          ? "Les galetes són petits arxius de text que els llocs web emmagatzemen al dispositiu de l'usuari quan els visita. Permeten al lloc recordar informació sobre la visita, la qual cosa pot facilitar la navegació i fer el web més útil."
          : "Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario al visitarlos. Permiten al sitio recordar información sobre la visita, lo que puede facilitar la navegación y hacer la web más útil."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "2. Galetes utilitzades en aquest lloc" : "2. Cookies utilizadas en este sitio"}
      </h2>
      <p>
        {isCa
          ? `El lloc web ${SITE_CONFIG.url}, titularitat de ${SITE_CONFIG.legalName}, utilitza exclusivament les categories de galetes següents:`
          : `El sitio web ${SITE_CONFIG.url}, titularidad de ${SITE_CONFIG.legalName}, utiliza exclusivamente las siguientes categorías de cookies:`}
      </p>

      <h3 className="font-serif text-lg text-navy-900">
        {isCa
          ? "a) Galetes tècniques i de preferències (exemptes de consentiment)"
          : "a) Cookies técnicas y de preferencias (exentas de consentimiento)"}
      </h3>
      <p>
        {isCa
          ? "Són estrictament necessàries per a la prestació del servei expressament sol·licitat per l'usuari, així com per recordar preferències bàsiques. Concretament:"
          : "Son estrictamente necesarias para la prestación del servicio expresamente solicitado por el usuario, así como para recordar preferencias básicas. Concretamente:"}
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>bertila-lang:</strong>{" "}
          {isCa
            ? "emmagatzema l'idioma seleccionat per l'usuari (castellà o català). Galeta de primera part, de tipus localStorage. Durada: persistent."
            : "almacena el idioma seleccionado por el usuario (castellano o catalán). Cookie de primera parte, de tipo localStorage. Duración: persistente."}
        </li>
        <li>
          <strong>bertila-cookies-consent:</strong>{" "}
          {isCa
            ? "emmagatzema la decisió de l'usuari respecte al banner de galetes. Galeta de primera part, de tipus localStorage. Durada: persistent."
            : "almacena la decisión del usuario respecto al banner de cookies. Cookie de primera parte, de tipo localStorage. Duración: persistente."}
        </li>
      </ul>

      <h3 className="font-serif text-lg text-navy-900">
        {isCa
          ? "b) Galetes analítiques (subjectes a consentiment)"
          : "b) Cookies analíticas (sujetas a consentimiento)"}
      </h3>
      <p>
        {isCa
          ? "Actualment aquest lloc no utilitza galetes analítiques. Si en el futur s'incorporessin, només s'activarien després del consentiment exprés de l'usuari i s'actualitzaria aquesta política."
          : "Actualmente este sitio no utiliza cookies analíticas. Si en el futuro se incorporasen, únicamente se activarían tras el consentimiento expreso del usuario y se actualizaría esta política."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "3. Gestió del consentiment" : "3. Gestión del consentimiento"}
      </h2>
      <p>
        {isCa
          ? "A la primera visita al Lloc Web es mostra un banner que permet a l'usuari acceptar, rebutjar o consultar més informació sobre les galetes. La decisió queda registrada i es pot revocar en qualsevol moment eliminant l'emmagatzematge local del navegador o utilitzant les eines de gestió de galetes del propi navegador."
          : "En la primera visita al Sitio Web se muestra un banner que permite al usuario aceptar, rechazar o consultar más información sobre las cookies. La decisión queda registrada y puede revocarse en cualquier momento eliminando el almacenamiento local del navegador o utilizando las herramientas de gestión de cookies del propio navegador."}
      </p>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa
          ? "4. Com desactivar les galetes al navegador"
          : "4. Cómo desactivar las cookies en el navegador"}
      </h2>
      <p>
        {isCa
          ? "L'usuari pot configurar el navegador per acceptar, rebutjar o eliminar les galetes. A continuació s'ofereixen enllaços a les instruccions oficials:"
          : "El usuario puede configurar el navegador para aceptar, rechazar o eliminar las cookies. A continuación se ofrecen enlaces a las instrucciones oficiales:"}
      </p>
      <ul className="list-disc pl-6">
        <li>Google Chrome: support.google.com/chrome/answer/95647</li>
        <li>Mozilla Firefox: support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies</li>
        <li>Apple Safari: support.apple.com/es-es/guide/safari/sfri11471/mac</li>
        <li>Microsoft Edge: support.microsoft.com/es-es/microsoft-edge</li>
      </ul>

      <h2 className="font-serif text-xl text-navy-900">
        {isCa ? "5. Modificacions" : "5. Modificaciones"}
      </h2>
      <p>
        {isCa
          ? `${SITE_CONFIG.legalName} es reserva el dret de modificar aquesta política per adaptar-la a novetats legislatives, jurisprudencials o per canvis en els serveis prestats. Es recomana consultar aquesta pàgina periòdicament.`
          : `${SITE_CONFIG.legalName} se reserva el derecho de modificar esta política para adaptarla a novedades legislativas, jurisprudenciales o por cambios en los servicios prestados. Se recomienda consultar esta página periódicamente.`}
      </p>
    </LegalPageShell>
  );
}

"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/I18nContext";
import { SITE_CONFIG } from "@/lib/site-config";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { href: "/#about", key: "nav.about" },
  { href: "/#services", key: "nav.services" },
  { href: "/#testimonials", key: "nav.testimonials" },
  { href: "/#contact", key: "nav.contact" },
];

const LEGAL_LINKS = [
  { href: "/aviso-legal", key: "footer.legal.legal" },
  { href: "/privacidad", key: "footer.legal.privacy" },
  { href: "/politica-cookies", key: "footer.legal.cookies" },
  { href: "/accesibilidad", key: "footer.legal.accessibility" },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100" role="contentinfo">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-pretty text-sm text-navy-200">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-serif text-base font-semibold text-white">
            {t("footer.navTitle")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-200 transition hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-serif text-base font-semibold text-white">
            {t("footer.legalTitle")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-200 transition hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-serif text-base font-semibold text-white">
            {t("footer.contactTitle")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="text-navy-200 transition hover:text-accent"
              >
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="break-all text-navy-200 transition hover:text-accent"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 text-center text-xs text-navy-300">
          <p>
            © {year} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

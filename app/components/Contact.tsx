"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { SITE_CONFIG } from "@/lib/site-config";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const { t } = useI18n();

  return (
    <AnimatedSection
      id="contact"
      className="bg-navy-800 py-20 text-white sm:py-28"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("contact.eyebrow")}
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-5 text-pretty text-lg text-navy-100">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-navy-900">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-navy-200">
                {t("contact.callLabel")}
              </p>
              <p className="font-serif text-xl text-white group-hover:text-accent">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-navy-900">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2 7 12 13 22 7" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-navy-200">
                {t("contact.emailLabel")}
              </p>
              <p className="font-serif text-xl text-white group-hover:text-accent break-all">
                {SITE_CONFIG.email}
              </p>
            </div>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

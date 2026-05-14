"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

const SERVICES = [
  {
    key: "nuda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12 L12 4 L21 12" />
        <path d="M5 10 V20 H19 V10" />
        <path d="M10 20 V14 H14 V20" />
      </svg>
    ),
  },
  {
    key: "vivienda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21 H21" />
        <path d="M5 21 V11 L12 6 L19 11 V21" />
        <path d="M9 21 V15 H15 V21" />
        <path d="M12 13 V11" />
      </svg>
    ),
  },
  {
    key: "hipoteca",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11 L12 4 L20 11 V20 H4 Z" />
        <path d="M8 20 V14 H16 V20" />
        <circle cx="12" cy="13" r="1.5" />
        <path d="M12 11 V10 M12 16 V15" />
      </svg>
    ),
  },
];

export function Services() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="bg-navy-50/60 py-20 sm:py-28"
      aria-labelledby="services-title"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            {t("services.eyebrow")}
          </p>
          <h2
            id="services-title"
            className="mt-2 font-serif text-3xl text-navy-900 sm:text-4xl md:text-5xl"
          >
            {t("services.title")}
          </h2>
          <p className="mt-5 text-pretty text-lg text-navy-700">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.key}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-accent transition group-hover:bg-navy-900">
                <span className="block h-8 w-8" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl text-navy-900 sm:text-2xl">
                {t(`services.cards.${service.key}.title`)}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-navy-700">
                {t(`services.cards.${service.key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

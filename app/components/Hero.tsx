"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-navy-800 pb-24 pt-32 sm:pt-40 md:pb-32 md:pt-48"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -bottom-32 left-1/4 h-[420px] w-[420px] rounded-full bg-navy-500/30 blur-[100px]" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {t("hero.eyebrow")}
          </p>
          <h1
            id="hero-title"
            className="text-balance font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-navy-50 sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-navy-950 shadow-lg transition hover:bg-accent-dark hover:text-white hover:shadow-xl"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {t("hero.ctaCall")}
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-navy-900"
            >
              {t("hero.ctaLearn")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

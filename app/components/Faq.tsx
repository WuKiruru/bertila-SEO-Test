"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

type FaqItem = { question: string; answer: string };
type FaqSource = { label: string; url: string };

export function Faq() {
  const { t, tArray } = useI18n();
  const reduce = useReducedMotion();
  const items = tArray<FaqItem>("faq.items");
  const sources = tArray<FaqSource>("faq.sources");

  return (
    <section
      id="faq"
      className="bg-navy-50/60 py-20 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            {t("faq.eyebrow")}
          </p>
          <h2
            id="faq-title"
            className="mt-2 font-serif text-3xl text-navy-900 sm:text-4xl md:text-5xl"
          >
            {t("faq.title")}
          </h2>
          <p className="mt-5 text-pretty text-lg text-navy-700">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, idx) => (
            <motion.details
              key={idx}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100 transition open:shadow-md sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-navy-900 sm:text-xl">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition group-open:rotate-45 group-open:bg-accent group-open:text-navy-900"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-pretty text-base leading-relaxed text-navy-700">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>

        {sources.length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-navy-100 bg-white/70 p-6 sm:p-7">
            <h3 className="font-serif text-lg text-navy-900 sm:text-xl">
              {t("faq.sourcesTitle")}
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              {t("faq.sourcesIntro")}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {sources.map((source) => (
                <li key={source.url} className="flex items-start gap-2">
                  <svg
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-accent-dark"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener"
                    className="font-medium text-navy-800 underline underline-offset-2 hover:text-accent-dark"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

type FaqItem = { question: string; answer: string };

export function Faq() {
  const { t, tArray } = useI18n();
  const reduce = useReducedMotion();
  const items = tArray<FaqItem>("faq.items");

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
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

type Testimonial = {
  name: string;
  age: number;
  neighborhood: string;
  photo?: string;
  quote: string;
};

export function Testimonials() {
  const { t, tArray } = useI18n();
  const reduce = useReducedMotion();
  const items = tArray<Testimonial>("testimonials.items");

  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            {t("testimonials.eyebrow")}
          </p>
          <h2
            id="testimonials-title"
            className="mt-2 font-serif text-3xl text-navy-900 sm:text-4xl md:text-5xl"
          >
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {items.map((item, idx) => (
            <motion.figure
              key={`${item.name}-${idx}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              className="flex w-full flex-col rounded-2xl border border-navy-100 bg-navy-50/40 p-7 shadow-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <svg
                aria-hidden="true"
                className="mb-4 h-8 w-8 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.6 6c-2 1-3.6 3-3.6 5v7h6v-7H8.4c0-1 .8-2.4 2.4-3.2L9.6 6Zm9 0c-2 1-3.6 3-3.6 5v7h6v-7h-3.6c0-1 .8-2.4 2.4-3.2L18.6 6Z" />
              </svg>
              <blockquote className="flex-1">
                <p className="text-pretty text-base leading-relaxed text-navy-800">
                  {item.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                {item.photo ? (
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image
                      src={item.photo}
                      alt={`${t("testimonials.photoAlt")}: ${item.name}`}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 font-serif text-xl text-white"
                    role="img"
                    aria-label={`${t("testimonials.photoAlt")}: ${item.name}`}
                  >
                    {item.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-navy-600">
                    {item.age} · {item.neighborhood}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

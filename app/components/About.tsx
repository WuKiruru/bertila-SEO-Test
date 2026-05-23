"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/I18nContext";
import { AnimatedSection } from "./AnimatedSection";

export function About() {
  const { t } = useI18n();

  return (
    <AnimatedSection
      id="about"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-narrow grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-navy-50 ring-1 ring-navy-100">
            <Image
              src="/B-3.webp"
              alt={t("about.portraitAlt")}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-[center_80%]"
            />
            <div className="absolute bottom-6 left-6 inline-flex items-center rounded-full bg-navy-800/95 px-4 py-2 text-white shadow-lg backdrop-blur">
              <p className="font-serif text-lg">{t("about.title")}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            {t("about.eyebrow")}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-navy-900 sm:text-4xl">
            {t("about.title")}
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-lg text-navy-700">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

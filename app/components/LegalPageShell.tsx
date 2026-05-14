"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useI18n } from "@/lib/i18n/I18nContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  titleEs: string;
  titleCa: string;
  lastUpdatedEs: string;
  lastUpdatedCa: string;
  children: ReactNode;
};

export function LegalPageShell({
  titleEs,
  titleCa,
  lastUpdatedEs,
  lastUpdatedCa,
  children,
}: Props) {
  const { t, lang } = useI18n();
  const title = lang === "ca" ? titleCa : titleEs;
  const lastUpdated = lang === "ca" ? lastUpdatedCa : lastUpdatedEs;

  return (
    <>
      <Header />
      <main id="main" className="bg-white pb-20 pt-28 sm:pt-32">
        <article className="container-narrow max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-accent-dark"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("legal.back")}
          </Link>
          <h1 className="mt-6 font-serif text-3xl text-navy-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-navy-500">
            {t("legal.lastUpdated")}: {lastUpdated}
          </p>
          <div className="legal-content mt-8 space-y-5 text-pretty text-base leading-relaxed text-navy-800">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

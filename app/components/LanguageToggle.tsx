"use client";

import { useI18n } from "@/lib/i18n/I18nContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang, t } = useI18n();
  const next = lang === "es" ? "CA" : "ES";
  const current = lang === "es" ? "ES" : "CA";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("nav.langSwitch")}
      className={`inline-flex items-center gap-1 rounded-full border border-navy-800/20 px-3 py-1.5 text-sm font-medium text-navy-800 transition hover:bg-navy-800 hover:text-white focus-visible:ring-2 focus-visible:ring-accent ${className}`}
    >
      <span aria-hidden="true" className="font-semibold">{current}</span>
      <span aria-hidden="true" className="text-navy-300">/</span>
      <span aria-hidden="true" className="text-navy-400">{next}</span>
    </button>
  );
}

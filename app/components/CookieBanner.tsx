"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";

const STORAGE_KEY = "bertila-cookies-consent";
type Consent = "accepted" | "rejected";

export function CookieBanner() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (!stored) setVisible(true);
  }, []);

  function persist(value: Consent) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
      window.localStorage.setItem(`${STORAGE_KEY}-date`, new Date().toISOString());
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label={t("cookies.title")}
          initial={reduce ? false : { y: 80, opacity: 0 }}
          animate={reduce ? undefined : { y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-navy-200 sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              <p className="font-serif text-lg text-navy-900">
                {t("cookies.title")}
              </p>
              <p className="mt-2 text-sm text-navy-700">
                {t("cookies.message")}{" "}
                <Link
                  href="/politica-cookies"
                  aria-label={t("cookies.more")}
                  className="font-medium text-navy-800 underline underline-offset-2 hover:text-accent-dark"
                >
                  {t("cookies.more")}
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <button
                type="button"
                onClick={() => persist("rejected")}
                className="rounded-full border border-navy-300 px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-50"
              >
                {t("cookies.reject")}
              </button>
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-900"
              >
                {t("cookies.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

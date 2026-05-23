"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import {
  DEFAULT_LANGUAGE,
  Language,
  SUPPORTED_LANGUAGES,
  translations,
} from "./translations";

const STORAGE_KEY = "bertila-lang";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (path: string) => string;
  tArray: <T = unknown>(path: string) => T[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function resolve(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
      setLangState(stored as Language);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = lang;
    }
  }, [lang, hydrated]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "es" ? "ca" : "es"));
  }, []);

  const t = useCallback(
    (path: string): string => {
      const value = resolve(translations[lang], path);
      if (typeof value === "string") return value;
      return path;
    },
    [lang],
  );

  const tArray = useCallback(
    <T,>(path: string): T[] => {
      const value = resolve(translations[lang], path);
      if (Array.isArray(value)) return value as T[];
      return [];
    },
    [lang],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, toggleLang, t, tArray }),
    [lang, setLang, toggleLang, t, tArray],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

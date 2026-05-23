import { cookies, headers } from "next/headers";
import {
  DEFAULT_LANGUAGE,
  Language,
  SUPPORTED_LANGUAGES,
} from "./translations";

const LANG_COOKIE = "bertila-lang";

export function getPreferredLanguage(): Language {
  const cookieStore = cookies();
  const cookieLang = cookieStore.get(LANG_COOKIE)?.value;

  if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang as Language)) {
    return cookieLang as Language;
  }

  const acceptLanguage = headers().get("accept-language") ?? "";
  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("ca")) {
    return "ca";
  }

  return DEFAULT_LANGUAGE;
}

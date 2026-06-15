import type { AstroCookies } from "astro";
import { LANG_COOKIE_NAME } from "./constants";

export type Lang = "zh" | "en";

export function getLangFromCookie(cookies: AstroCookies): Lang {
  const pref = cookies.get(LANG_COOKIE_NAME)?.value;
  if (pref === "en") return "en";
  return "zh";
}

export function setLangCookie(headers: Headers, lang: Lang): void {
  headers.set(
    "Set-Cookie",
    `${LANG_COOKIE_NAME}=${lang}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`,
  );
}

export function t(
  translations: Record<string, string>,
  key: string,
  fallback?: string,
): string {
  return translations[key] ?? fallback ?? key;
}

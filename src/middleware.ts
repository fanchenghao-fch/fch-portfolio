import { defineMiddleware } from "astro:middleware";
import { getGateCookie } from "./lib/session";
import { getLangFromCookie, setLangCookie } from "./lib/i18n";
import type { Lang } from "./lib/i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, url } = context;
  const pathname = url.pathname;

  // Public paths (no gate required)
  const publicPaths = [
    "/gate",
    "/en/gate",
    "/api/visit",
    "/api/track",
    "/api/rag",
    "/api/admin",
    "/admin/login",
    "/favicon.svg",
    "/_astro",
    "/_image",
  ];

  // Static assets
  if (
    pathname.startsWith("/_astro") ||
    pathname.startsWith("/_image") ||
    pathname.match(/\.(css|js|svg|png|jpg|ico|pdf)$/)
  ) {
    return next();
  }

  // Check if this request is on a gate page (shouldn't redirect)
  const isOnGatePage = pathname === "/gate" || pathname === "/en/gate";

  // ── i18n: detect language preference ──
  const lang: Lang = getLangFromCookie(cookies);
  context.locals.lang = lang;

  // Redirect root to /gate
  if (pathname === "/" || pathname === "/index" || pathname === "/index.html") {
    return context.redirect("/gate");
  }

  // Gate page: if already authed, redirect to home
  if (isOnGatePage) {
    const cookieHeader = request.headers.get("cookie") ?? "";
    const payload = getGateCookie(cookieHeader);
    if (payload) {
      context.locals.sessionId = payload.sessionId;
      context.locals.company = payload.company;
      context.locals.role = payload.role;
      // Redirect to appropriate home based on lang
      const homePath = lang === "en" ? "/en/home" : "/home";
      return context.redirect(homePath);
    }
    return next();
  }

  // Admin login page: no gate required
  if (pathname === "/admin/login") {
    return next();
  }

  // API endpoints: check auth separately in each handler
  if (pathname.startsWith("/api/")) {
    const cookieHeader = request.headers.get("cookie") ?? "";
    const payload = getGateCookie(cookieHeader);
    if (payload) {
      context.locals.sessionId = payload.sessionId;
      context.locals.company = payload.company;
      context.locals.role = payload.role;
    }
    return next();
  }

  // ── Protected pages: check gate cookie ──
  const cookieHeader = request.headers.get("cookie") ?? "";
  const payload = getGateCookie(cookieHeader);

  if (!payload) {
    const gatePath = lang === "en" ? "/en/gate" : "/gate";
    return context.redirect(`${gatePath}?redirect=${encodeURIComponent(pathname)}`);
  }

  context.locals.sessionId = payload.sessionId;
  context.locals.company = payload.company;
  context.locals.role = payload.role;

  const response = await next();

  // Persist language preference in cookie if not already set
  if (!cookies.get("lang_pref")) {
    setLangCookie(response.headers, lang);
  }

  return response;
});

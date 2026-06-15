/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    sessionId: string;
    company: string;
    role: string;
    lang: "zh" | "en";
  }
}

interface ImportMetaEnv {
  // Server-side
  readonly DEEPSEEK_API_KEY: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
  readonly ALERT_EMAIL: string;
  readonly SESSION_SECRET: string;
  readonly ADMIN_EMAIL: string;
  // Client-side (prefixed with PUBLIC_)
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { createClient } from "@supabase/supabase-js";

// Server-side client (uses service_role key for full DB access)
export function getServerClient() {
  return createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

// Browser client (uses anon key for Auth only)
export function getBrowserClient() {
  return createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
      auth: {
        flowType: "pkce",
        autoRefreshToken: true,
        persistSession: true,
      },
    },
  );
}

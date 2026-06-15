import type { APIRoute } from "astro";
import { getServerClient } from "../../lib/supabase";

export const GET: APIRoute = async ({ request }) => {
  try {
    // Verify JWT from Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "未授权" }), { status: 401 });
    }

    const token = authHeader.slice(7);
    const supabase = getServerClient();

    // Verify the token
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(JSON.stringify({ error: "未授权" }), { status: 401 });
    }

    // Check admin email
    if (user.email !== import.meta.env.ADMIN_EMAIL) {
      return new Response(JSON.stringify({ error: "无权访问" }), { status: 403 });
    }

    const url = new URL(request.url);
    const type = url.searchParams.get("type") ?? "overview";

    switch (type) {
      case "visits": {
        const { data: visits } = await supabase
          .from("visits")
          .select("*")
          .order("visited_at", { ascending: false })
          .limit(50);

        return new Response(JSON.stringify({ visits }), { status: 200 });
      }

      case "rag-logs": {
        const { data: logs } = await supabase
          .from("rag_logs")
          .select("*")
          .order("asked_at", { ascending: false })
          .limit(50);

        return new Response(JSON.stringify({ logs }), { status: 200 });
      }

      case "overview":
      default: {
        // Count distinct companies this week
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const { count: totalVisits } = await supabase
          .from("visits")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", weekAgo.toISOString());

        const { data: visitList } = await supabase
          .from("visits")
          .select("company, duration_sec")
          .gte("visited_at", weekAgo.toISOString());

        const uniqueCompanies = new Set(
          visitList?.map((v) => v.company) ?? [],
        );
        const deepBrowsers =
          visitList?.filter((v) => (v.duration_sec ?? 0) > 180).length ?? 0;

        const { count: totalRag } = await supabase
          .from("rag_logs")
          .select("*", { count: "exact", head: true })
          .gte("asked_at", weekAgo.toISOString());

        return new Response(
          JSON.stringify({
            overview: {
              totalCompanies: uniqueCompanies.size,
              totalVisits: totalVisits ?? 0,
              deepBrowsers,
              totalRagQuestions: totalRag ?? 0,
            },
            visits: visitList ?? [],
          }),
          { status: 200 },
        );
      }
    }
  } catch (err) {
    console.error("Admin API error:", err);
    return new Response(JSON.stringify({ error: "服务器错误" }), { status: 500 });
  }
};

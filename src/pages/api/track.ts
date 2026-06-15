import type { APIRoute } from "astro";
import { getServerClient } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const sessionId = locals.sessionId;
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "未找到会话" }), {
        status: 401,
      });
    }

    const body = await request.json();
    const { duration_sec: durationSec, viewed_projects: viewedProjects } =
      body;

    const supabase = getServerClient();

    // Update the visit record
    const updateData: Record<string, unknown> = {};
    if (typeof durationSec === "number" && durationSec > 0) {
      updateData.duration_sec = durationSec;
    }
    if (Array.isArray(viewedProjects)) {
      updateData.viewed_projects = viewedProjects;
    }

    if (Object.keys(updateData).length > 0) {
      await supabase
        .from("visits")
        .update(updateData)
        .eq("session_id", sessionId);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "服务器错误" }), {
      status: 500,
    });
  }
};

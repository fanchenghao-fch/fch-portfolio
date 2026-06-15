import type { APIRoute } from "astro";
import { getServerClient } from "../../lib/supabase";
import { sendVisitAlert } from "../../lib/mailer";
import { setGateCookie } from "../../lib/session";
import crypto from "node:crypto";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { company, role } = body;

    // Validate
    if (!company || !role) {
      return new Response(
        JSON.stringify({ error: "公司名称和职位均为必填" }),
        { status: 400 },
      );
    }

    if (typeof company !== "string" || company.trim().length > 200) {
      return new Response(
        JSON.stringify({ error: "公司名称格式不正确" }),
        { status: 400 },
      );
    }

    if (typeof role !== "string" || role.trim().length > 200) {
      return new Response(
        JSON.stringify({ error: "职位格式不正确" }),
        { status: 400 },
      );
    }

    const companyTrimmed = company.trim();
    const roleTrimmed = role.trim();

    // Collect metadata
    const sessionId = crypto.randomUUID();
    const referrer = request.headers.get("referer") ?? undefined;
    const userAgent = request.headers.get("user-agent") ?? undefined;
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    // Write to Supabase
    const supabase = getServerClient();
    const { error: dbError } = await supabase.from("visits").insert({
      company: companyTrimmed,
      role: roleTrimmed,
      session_id: sessionId,
      referrer,
      device: userAgent,
      region: ip,
    });

    if (dbError) {
      console.error("Failed to write visit:", dbError);
      // Don't block the user — continue with cookie + redirect
    }

    // Send email alert (fire and forget)
    sendVisitAlert(
      companyTrimmed,
      roleTrimmed,
      new Date().toLocaleString("zh-CN"),
    ).catch((e) => console.error("Mail alert failed:", e));

    // Set gate cookie
    const responseHeaders = new Headers();
    setGateCookie(responseHeaders, {
      sessionId,
      company: companyTrimmed,
      role: roleTrimmed,
    });
    responseHeaders.set("Content-Type", "application/json");

    return new Response(JSON.stringify({ success: true, sessionId }), {
      status: 200,
      headers: responseHeaders,
    });
  } catch {
    return new Response(JSON.stringify({ error: "服务器错误" }), {
      status: 500,
    });
  }
};

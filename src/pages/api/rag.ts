import type { APIRoute } from "astro";
import { ragQuery } from "../../lib/deepseek";
import { checkRagRateLimit } from "../../lib/rateLimit";
import { buildRagCorpus } from "../../data/rag-corpus";
import { getServerClient } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const sessionId = locals.sessionId;

    // Rate limit check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const limitCheck = await checkRagRateLimit(
      sessionId ?? `anon_${ip}`,
      ip,
    );
    if (!limitCheck.allowed) {
      return new Response(
        JSON.stringify({ error: limitCheck.reason }),
        { status: 429 },
      );
    }

    // Parse request
    const body = await request.json();
    const { question, history } = body;

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "问题不能为空" }),
        { status: 400 },
      );
    }

    if (question.length > 1000) {
      return new Response(
        JSON.stringify({ error: "问题长度超出限制" }),
        { status: 400 },
      );
    }

    // Build RAG corpus
    const corpus = buildRagCorpus("zh");

    // Call DeepSeek
    const { answer } = await ragQuery(
      question.trim(),
      corpus,
      history?.slice(-10) ?? [],
    );

    // Log to Supabase
    const supabase = getServerClient();
    await supabase.from("rag_logs").insert({
      session_id: sessionId ?? `anon_${ip}`,
      company: locals.company ?? "未知",
      question: question.trim(),
      answer,
    });

    return new Response(
      JSON.stringify({ answer }),
      { status: 200 },
    );
  } catch (err) {
    console.error("RAG error:", err);
    return new Response(
      JSON.stringify({ error: "服务暂时不可用，请稍后再试" }),
      { status: 500 },
    );
  }
};

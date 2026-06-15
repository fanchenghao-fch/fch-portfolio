import { getServerClient } from "./supabase";
import { RAG_LIMITS } from "./constants";

/**
 * Check and decrement a rate-limit bucket.
 * Returns { allowed: true } if within limits, { allowed: false } if exceeded.
 */
export async function checkRateLimit(
  bucket: string,
  maxPerDay: number,
): Promise<{ allowed: boolean; remaining: number }> {
  const supabase = getServerClient();

  // Try to get existing bucket
  const { data: existing } = await supabase
    .from("rate_limits")
    .select("remaining, reset_at")
    .eq("bucket", bucket)
    .single();

  const now = new Date();

  if (existing && new Date(existing.reset_at) > now) {
    // Bucket exists and hasn't reset — decrement
    if (existing.remaining <= 0) {
      return { allowed: false, remaining: 0 };
    }
    const remaining = existing.remaining - 1;
    await supabase
      .from("rate_limits")
      .update({ remaining })
      .eq("bucket", bucket);
    return { allowed: true, remaining };
  }

  // New bucket or expired — create/reset
  const resetAt = new Date(now);
  resetAt.setDate(resetAt.getDate() + 1);
  resetAt.setHours(0, 0, 0, 0);

  await supabase.from("rate_limits").upsert(
    {
      bucket,
      remaining: maxPerDay - 1,
      reset_at: resetAt.toISOString(),
    },
    { onConflict: "bucket" },
  );

  return { allowed: true, remaining: maxPerDay - 1 };
}

export async function checkRagRateLimit(
  sessionId: string,
  ip: string,
): Promise<{ allowed: boolean; reason?: string }> {
  // Tier 1: Per-session limit
  const sessionCheck = await checkRateLimit(
    `rag_session:${sessionId}`,
    RAG_LIMITS.perSession,
  );
  if (!sessionCheck.allowed) {
    return { allowed: false, reason: "您今日的问答次数已达上限，请明天再来。" };
  }

  // Tier 2: Per-IP limit
  const ipCheck = await checkRateLimit(`rag_ip:${ip}`, RAG_LIMITS.perIp);
  if (!ipCheck.allowed) {
    return { allowed: false, reason: "今日问答已达上限，请明天再来。" };
  }

  // Tier 3: Global limit
  const globalCheck = await checkRateLimit("rag_global", RAG_LIMITS.global);
  if (!globalCheck.allowed) {
    return { allowed: false, reason: "今日全站问答已达上限，请明天再来。" };
  }

  return { allowed: true };
}

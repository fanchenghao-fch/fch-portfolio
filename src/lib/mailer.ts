import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_HOST,
  port: Number(import.meta.env.SMTP_PORT),
  secure: true,
  auth: {
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS,
  },
});

export async function sendVisitAlert(
  company: string,
  role: string,
  visitedAt: string,
): Promise<boolean> {
  try {
    const to = import.meta.env.ALERT_EMAIL;
    await transporter.sendMail({
      from: `"FCH Portfolio" <${import.meta.env.SMTP_USER}>`,
      to,
      subject: `🔔 新来访：「${company}」- ${role}`,
      text: `【来访提醒】

公司/团队：${company}
职位：${role}
时间：${visitedAt}

—— FCH Portfolio · 来访雷达`,
      html: `<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;padding:24px;background:#FBFBFD;">
        <h2 style="color:#0E8C82;">🔔 新的来访提醒</h2>
        <table style="border-collapse:collapse;margin-top:16px;">
          <tr><td style="padding:8px 16px 8px 0;color:#6E6E73;">公司/团队</td><td style="font-weight:600;">${company}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#6E6E73;">职位</td><td style="font-weight:600;">${role}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#6E6E73;">时间</td><td>${visitedAt}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#9a9aa0;">—— FCH Portfolio · 来访雷达</p>
      </div>`,
    });
    return true;
  } catch (err) {
    console.error("Mail send failed:", err);
    return false;
  }
}

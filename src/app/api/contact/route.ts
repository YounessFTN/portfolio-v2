import { NextRequest, NextResponse } from "next/server";
import { contact, person } from "@/resources";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  // Honeypot: must stay empty, only bots fill it
  website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: NextRequest) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Silently accept bot submissions so they don't retry
  if (clean(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    projectType: clean(body.projectType, 80),
    budget: clean(body.budget, 80),
    timeline: clean(body.timeline, 80),
    message: clean(body.message, 5000),
  };

  if (!data.name || !EMAIL_REGEX.test(data.email) || data.message.length < 20) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, un email valide et un message (20 caractères min.)." },
      { status: 400 },
    );
  }

  if (
    (data.projectType && !contact.projectTypes.includes(data.projectType)) ||
    (data.budget && !contact.budgets.includes(data.budget)) ||
    (data.timeline && !contact.timelines.includes(data.timeline))
  ) {
    return NextResponse.json({ error: "Option invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "L'envoi est momentanément indisponible." },
      { status: 503 },
    );
  }

  const rows: Array<[string, string]> = [
    ["Nom", data.name],
    ["Email", data.email],
    ["Entreprise", data.company || "—"],
    ["Type de projet", data.projectType || "—"],
    ["Budget", data.budget || "—"],
    ["Délai", data.timeline || "—"],
  ];

  const html = `
    <h2>Nouvelle demande de projet</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `;

  const text = `${rows.map(([label, value]) => `${label} : ${value}`).join("\n")}\n\n${data.message}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || person.email],
      reply_to: data.email,
      subject: `Nouveau projet${data.projectType ? ` (${data.projectType})` : ""} – ${data.name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend error", response.status, await response.text());
    return NextResponse.json(
      { error: "L'envoi a échoué, réessayez ou écrivez-moi directement." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}

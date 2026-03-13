import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase-server"

interface ContactFormPayload {
  form_type: "contact" | "audit" | "newsletter"
  name?: string
  email: string
  phone?: string
  company?: string
  message?: string
  metadata?: Record<string, string>
}

const NOTIFICATION_EMAIL = "zach@olympiamarketing.com"

function validatePayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") return null
  const data = body as Record<string, unknown>

  const formType = data.form_type
  if (formType !== "contact" && formType !== "audit" && formType !== "newsletter") return null

  const email = typeof data.email === "string" ? data.email.trim() : ""
  if (!email || !email.includes("@")) return null

  return {
    form_type: formType,
    name: typeof data.name === "string" ? data.name.trim() : undefined,
    email,
    phone: typeof data.phone === "string" ? data.phone.trim() : undefined,
    company: typeof data.company === "string" ? data.company.trim() : undefined,
    message: typeof data.message === "string" ? data.message.trim() : undefined,
    metadata: typeof data.metadata === "object" && data.metadata !== null
      ? data.metadata as Record<string, string>
      : undefined,
  }
}

function buildNotificationEmail(payload: ContactFormPayload): { subject: string; html: string } {
  if (payload.form_type === "newsletter") {
    return {
      subject: `New Newsletter Signup: ${payload.email}`,
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><em>Submitted via olympiamarketing.com</em></p>
      `,
    }
  }

  if (payload.form_type === "audit") {
    const websiteUrl = payload.metadata?.website_url ?? "Not provided"
    const industryName = payload.metadata?.industry_name ?? "Unknown"
    return {
      subject: `New Competitive Audit Request: ${websiteUrl}`,
      html: `
        <h2>New Competitive Audit Request</h2>
        <p><strong>Website:</strong> ${websiteUrl}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Industry:</strong> ${industryName}</p>
        <p><em>Submitted via olympiamarketing.com</em></p>
      `,
    }
  }

  return {
    subject: `New Contact Form Submission: ${payload.name ?? payload.email}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${payload.name ?? "Not provided"}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone ?? "Not provided"}</p>
      <p><strong>Company:</strong> ${payload.company ?? "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 3px solid #6D28D9; padding-left: 12px; color: #444;">
        ${payload.message ?? "No message"}
      </blockquote>
      <p><em>Submitted via olympiamarketing.com</em></p>
    `,
  }
}

async function sendEmailNotification(payload: ContactFormPayload): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) return

  const { subject, html } = buildNotificationEmail(payload)

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Olympia Marketing <notifications@olympiamarketing.com>",
      to: [NOTIFICATION_EMAIL],
      subject,
      html,
    }),
  })
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const payload = validatePayload(body)
  if (!payload) {
    return NextResponse.json(
      { error: "Invalid form data. Email and form_type are required." },
      { status: 400 },
    )
  }

  const supabase = await createSupabaseServerClient()

  const { error: dbError } = await supabase.from("form_submissions").insert({
    form_type: payload.form_type,
    name: payload.name ?? null,
    email: payload.email,
    phone: payload.phone ?? null,
    company: payload.company ?? null,
    message: payload.message ?? null,
    metadata: payload.metadata ?? null,
  })

  if (dbError) {
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 },
    )
  }

  // Send email notification (fire-and-forget — don't block the response)
  sendEmailNotification(payload).catch(() => {
    // Email failure should not affect form submission success
  })

  return NextResponse.json({ success: true })
}

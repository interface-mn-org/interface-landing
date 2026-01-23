import { NextResponse } from "next/server"

import {
  generateOtpCode,
  getOtpChallengeCookieName,
  hashOtp,
  isValidEmail,
  setOtp,
  signOtpChallenge,
} from "@/lib/free-landing"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: unknown }
    const email = typeof body.email === "string" ? body.email.trim() : ""

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
    }

    // 10 minutes.
    const otp = generateOtpCode()
    setOtp(email, otp, 10 * 60 * 1000)
    const exp = Date.now() + 10 * 60 * 1000
    const challenge = signOtpChallenge(email, hashOtp(email, otp), exp)

    const resendKey = process.env.RESEND_API_KEY
    const from = process.env.RESEND_FROM

    if (resendKey && from) {
      const subject = "Your verification code"
      const text = `Your verification code is: ${otp}\n\nThis code expires in 10 minutes.`

      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [email],
          subject,
          text,
        }),
      })

      if (!resp.ok) {
        const details = await resp.text().catch(() => "")
        console.error("[free-landing] Resend send failed", resp.status, details)
        return NextResponse.json(
          { ok: false, error: "email_send_failed" },
          { status: 502 }
        )
      }
    } else {
      // Dev fallback: still enables OTP UX without an email provider.
      console.log(`[free-landing] OTP for ${email}: ${otp}`)
    }

    const res = NextResponse.json({ ok: true })
    res.cookies.set({
      name: getOtpChallengeCookieName(),
      value: challenge,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(exp),
    })
    return res
  } catch (e) {
    console.error("[free-landing] request-otp error", e)
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }
}


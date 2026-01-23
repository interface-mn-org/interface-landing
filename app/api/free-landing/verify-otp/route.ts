import { NextResponse } from "next/server"
import { cookies } from "next/headers"

import {
  getOtpChallengeCookieName,
  getVerifiedCookieName,
  hashOtp,
  isValidEmail,
  signOtpChallenge,
  signVerifiedEmail,
  verifyOtpChallengeCookie,
} from "@/lib/free-landing"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: unknown; otp?: unknown }
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const otp = typeof body.otp === "string" ? body.otp.trim() : ""

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
    }
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json({ ok: false, error: "invalid_otp" }, { status: 400 })
    }

    const store = await cookies()
    const challengeValue = store.get(getOtpChallengeCookieName())?.value
    const challenge = verifyOtpChallengeCookie(challengeValue)
    if (!challenge || challenge.email !== email.toLowerCase()) {
      return NextResponse.json({ ok: false, error: "missing" }, { status: 400 })
    }

    const actualHash = hashOtp(email, otp)
    if (actualHash !== challenge.otpHash) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
    }

    // Verified session: 2 hours.
    const exp = Date.now() + 2 * 60 * 60 * 1000
    const cookieValue = signVerifiedEmail(email, exp)

    const res = NextResponse.json({ ok: true })
    // Clear OTP challenge cookie after successful verification.
    res.cookies.set({
      name: getOtpChallengeCookieName(),
      value: signOtpChallenge(email, "cleared", Date.now() - 1),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(0),
    })
    res.cookies.set({
      name: getVerifiedCookieName(),
      value: cookieValue,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(exp),
    })

    return res
  } catch (e) {
    console.error("[free-landing] verify-otp error", e)
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }
}


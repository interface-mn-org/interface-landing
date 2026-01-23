import { NextResponse } from "next/server"
import { cookies } from "next/headers"

import { getVerifiedCookieName, verifyVerifiedEmailCookie } from "@/lib/free-landing"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      companyType?: unknown
      companyName?: unknown
      email?: unknown
      primaryColor?: unknown
      sections?: unknown
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
    const verified = verifyVerifiedEmailCookie(
      (await cookies()).get(getVerifiedCookieName())?.value
    )

    if (!verified || verified !== email) {
      return NextResponse.json({ ok: false, error: "email_not_verified" }, { status: 401 })
    }

    const order = {
      companyType: typeof body.companyType === "string" ? body.companyType : "",
      companyName: typeof body.companyName === "string" ? body.companyName : "",
      email,
      primaryColor: typeof body.primaryColor === "string" ? body.primaryColor : "",
      sections: Array.isArray(body.sections) ? body.sections : [],
      createdAt: new Date().toISOString(),
    }

    // TODO: Replace with DB/CRM integration.
    console.log("[free-landing] order received", order)

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[free-landing] order error", e)
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }
}


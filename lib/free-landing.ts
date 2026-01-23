import crypto from "node:crypto"

type OtpRecord = {
  otpHash: string
  expiresAt: number
  attempts: number
}

type OtpStore = Map<string, OtpRecord>

declare global {
  // eslint-disable-next-line no-var
  var __freeLandingOtpStore: OtpStore | undefined
}

function getOtpStore(): OtpStore {
  if (!globalThis.__freeLandingOtpStore) {
    globalThis.__freeLandingOtpStore = new Map()
  }
  return globalThis.__freeLandingOtpStore
}

function getOtpSecret() {
  return process.env.FREE_LANDING_OTP_SECRET ?? "dev-only-secret"
}

export function isValidEmail(email: string) {
  // Simple but solid baseline for UI + server validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function generateOtpCode() {
  const n = crypto.randomInt(0, 1_000_000)
  return String(n).padStart(6, "0")
}

export function hashOtp(email: string, otp: string) {
  return crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}|${otp}|${getOtpSecret()}`)
    .digest("hex")
}

export function setOtp(email: string, otp: string, ttlMs: number) {
  const store = getOtpStore()
  store.set(email.toLowerCase(), {
    otpHash: hashOtp(email, otp),
    expiresAt: Date.now() + ttlMs,
    attempts: 0,
  })
}

export function verifyOtp(email: string, otp: string) {
  const store = getOtpStore()
  const key = email.toLowerCase()
  const record = store.get(key)
  if (!record) return { ok: false as const, reason: "missing" as const }

  if (Date.now() > record.expiresAt) {
    store.delete(key)
    return { ok: false as const, reason: "expired" as const }
  }

  record.attempts += 1
  if (record.attempts > 5) {
    store.delete(key)
    return { ok: false as const, reason: "too_many_attempts" as const }
  }

  const expected = record.otpHash
  const actual = hashOtp(email, otp)
  const matches =
    expected.length === actual.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(actual))

  if (!matches) return { ok: false as const, reason: "invalid" as const }

  store.delete(key)
  return { ok: true as const }
}

const OTP_CHALLENGE_COOKIE = "free_landing_otp_challenge"
const VERIFIED_COOKIE = "free_landing_verified"

export function getOtpChallengeCookieName() {
  return OTP_CHALLENGE_COOKIE
}

export function getVerifiedCookieName() {
  return VERIFIED_COOKIE
}

export function signOtpChallenge(
  email: string,
  otpHash: string,
  expiresAtMs: number
) {
  const payload = JSON.stringify({
    email: email.toLowerCase(),
    otpHash,
    exp: expiresAtMs,
  })
  const payloadB64 = Buffer.from(payload).toString("base64url")
  const sig = crypto
    .createHmac("sha256", getOtpSecret())
    .update(payloadB64)
    .digest("base64url")
  return `${payloadB64}.${sig}`
}

export function verifyOtpChallengeCookie(value: string | undefined) {
  if (!value) return null
  const [payloadB64, sig] = value.split(".")
  if (!payloadB64 || !sig) return null

  const expectedSig = crypto
    .createHmac("sha256", getOtpSecret())
    .update(payloadB64)
    .digest("base64url")

  const sigOk =
    expectedSig.length === sig.length &&
    crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(sig))

  if (!sigOk) return null

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as {
      email: string
      otpHash: string
      exp: number
    }
    if (!payload?.email || !payload?.otpHash || !payload?.exp) return null
    if (Date.now() > payload.exp) return null
    return { email: payload.email, otpHash: payload.otpHash, exp: payload.exp }
  } catch {
    return null
  }
}

export function signVerifiedEmail(email: string, expiresAtMs: number) {
  const payload = JSON.stringify({
    email: email.toLowerCase(),
    exp: expiresAtMs,
  })
  const payloadB64 = Buffer.from(payload).toString("base64url")
  const sig = crypto
    .createHmac("sha256", getOtpSecret())
    .update(payloadB64)
    .digest("base64url")
  return `${payloadB64}.${sig}`
}

export function verifyVerifiedEmailCookie(value: string | undefined) {
  if (!value) return null
  const [payloadB64, sig] = value.split(".")
  if (!payloadB64 || !sig) return null

  const expectedSig = crypto
    .createHmac("sha256", getOtpSecret())
    .update(payloadB64)
    .digest("base64url")

  const sigOk =
    expectedSig.length === sig.length &&
    crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(sig))

  if (!sigOk) return null

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as {
      email: string
      exp: number
    }
    if (!payload?.email || !payload?.exp) return null
    if (Date.now() > payload.exp) return null
    return payload.email
  } catch {
    return null
  }
}


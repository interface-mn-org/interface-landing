"use client"

import { useMemo, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

type FormValues = {
  companyType: string
  companyName: string
  email: string
  primaryColor: string
  sections: string[]
}

export default function FreeLandingPage() {
  // `next-intl` key typing is based on message namespaces.
  // We keep a loose typing here so adding new keys doesn't break TS.
  const t = useTranslations("FreeLanding" as any) as unknown as (key: string) => string
  const FAKE_SUCCESS = process.env.NEXT_PUBLIC_FREE_LANDING_FAKE_SUCCESS === "true"

  const schema = useMemo(
    () =>
      z.object({
        companyType: z.string().min(1, t("validation.companyTypeRequired")),
        companyName: z.string().min(2, t("validation.companyNameRequired")),
        email: z.string().email(t("validation.emailInvalid")),
        primaryColor: z
          .string()
          .regex(/^#([0-9a-fA-F]{6})$/, t("validation.primaryColorInvalid")),
        sections: z.array(z.string()).min(1, t("validation.sectionsRequired")),
      }),
    [t]
  )

  const [otpRequested, setOtpRequested] = useState(false)
  const [otp, setOtp] = useState("")
  const [busy, setBusy] = useState<null | "requestOtp" | "submit">(null)
  const [status, setStatus] = useState<
    null | { type: "ok" | "error"; message: string }
  >(null)
  const [ordered, setOrdered] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      companyType: "",
      companyName: "",
      email: "",
      primaryColor: "#ff7a18",
      sections: ["hero", "about-us", "contact-us"],
    },
    mode: "onBlur",
  })

  const email = form.watch("email")
  const primaryColor = form.watch("primaryColor")
  const sections = form.watch("sections")

  const isEmailValid = useMemo(() => {
    return z.string().email().safeParse(email).success
  }, [email])

  const companyTypes = useMemo(
    () => [
      { value: "startup", label: t("companyTypes.startup") },
      { value: "sme", label: t("companyTypes.sme") },
      { value: "enterprise", label: t("companyTypes.enterprise") },
      { value: "agency", label: t("companyTypes.agency") },
      { value: "other", label: t("companyTypes.other") },
    ],
    [t]
  )

  const sectionsCatalog = useMemo(
    () => [
      { id: "hero", label: t("sections.hero.label"), description: t("sections.hero.description") },
      { id: "about-us", label: t("sections.about-us.label"), description: t("sections.about-us.description") },
      { id: "work-sections", label: t("sections.work-sections.label"), description: t("sections.work-sections.description") },
      { id: "testimonials", label: t("sections.testimonials.label"), description: t("sections.testimonials.description") },
      { id: "pricing", label: t("sections.pricing.label"), description: t("sections.pricing.description") },
      { id: "faq", label: t("sections.faq.label"), description: t("sections.faq.description") },
      { id: "contact-us", label: t("sections.contact-us.label"), description: t("sections.contact-us.description") },
    ],
    [t]
  )

  async function requestOtp() {
    setStatus(null)
    if (!isEmailValid) {
      form.setError("email", { message: t("validation.emailForOtp") })
      return
    }

    if (FAKE_SUCCESS) {
      setOtpRequested(true)
      setOtp("123456")
      setStatus({
        type: "ok",
        message: t("status.demoOtpVerified"),
      })
      return
    }

    setBusy("requestOtp")
    try {
      const resp = await fetch("/api/free-landing/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = (await resp.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null

      if (!resp.ok || !data?.ok) {
        setStatus({
          type: "error",
          message: t("status.otpSendFailed"),
        })
        return
      }

      setOtpRequested(true)
      setStatus({
        type: "ok",
        message: t("status.otpSent"),
      })
    } catch {
      setStatus({ type: "error", message: t("status.networkError") })
    } finally {
      setBusy(null)
    }
  }

  async function onSubmit(values: FormValues) {
    setStatus(null)

    if (FAKE_SUCCESS) {
      setOrdered(true)
      setStatus({
        type: "ok",
        message: t("status.demoOrderCreated"),
      })
      return
    }

    if (!otpRequested) {
      setStatus({ type: "error", message: t("status.verifyEmailFirst") })
      return
    }
    if (!/^\d{6}$/.test(otp)) {
      setStatus({ type: "error", message: t("status.otpRequired") })
      return
    }

    setBusy("submit")
    try {
      const verifyResp = await fetch("/api/free-landing/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, otp }),
      })

      const verifyData = (await verifyResp.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null

      if (!verifyResp.ok || !verifyData?.ok) {
        setStatus({ type: "error", message: t("status.otpInvalidOrExpired") })
        setOtp("")
        setOtpRequested(false)
        return
      }

      const orderResp = await fetch("/api/free-landing/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const orderData = (await orderResp.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null

      if (!orderResp.ok || !orderData?.ok) {
        setStatus({
          type: "error",
          message: t("status.orderFailed"),
        })
        return
      }

      setOrdered(true)
      setStatus({
        type: "ok",
        message: t("status.orderCreated"),
      })
    } catch {
      setStatus({ type: "error", message: t("status.networkError") })
    } finally {
      setBusy(null)
    }
  }

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <header className="mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t("kicker")}
          </p>
          <h1 className="mt-3 font-(--font-bebas) text-5xl tracking-wide md:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
          {FAKE_SUCCESS ? (
            <div className="mt-5 inline-flex border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {t("demoModeBadge")}
            </div>
          ) : null}
        </header>

        <div
          className={cn(
            "border border-border/40 bg-accent/2 backdrop-blur-sm",
            "p-6 md:p-10"
          )}
        >
          <form
            className="flex flex-col gap-10"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("company.legend")}
                </FieldLegend>

                <Field>
                  <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                    {t("company.typeLabel")}
                  </FieldLabel>
                  <FieldContent>
                    <Select
                      value={form.watch("companyType")}
                      onValueChange={(value) => form.setValue("companyType", value, { shouldValidate: true })}
                      disabled={ordered}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder={t("company.typePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {companyTypes.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError errors={[form.formState.errors.companyType]} />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                    {t("company.nameLabel")}
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      className="rounded-none font-mono"
                      placeholder={t("company.namePlaceholder")}
                      disabled={ordered}
                      {...form.register("companyName")}
                      aria-invalid={!!form.formState.errors.companyName}
                    />
                    <FieldError errors={[form.formState.errors.companyName]} />
                  </FieldContent>
                </Field>
              </FieldSet>

              <Separator className="opacity-40" />

              <FieldSet>
                <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("email.legend")}
                </FieldLegend>

                <Field>
                  <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                    {t("email.label")}
                  </FieldLabel>
                  <FieldContent>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                      <Input
                        className="rounded-none font-mono"
                        placeholder={t("email.placeholder")}
                        disabled={ordered}
                        {...form.register("email")}
                        aria-invalid={!!form.formState.errors.email}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-none font-mono text-[10px] uppercase tracking-widest"
                        onClick={requestOtp}
                        disabled={!isEmailValid || busy !== null || ordered}
                      >
                        {busy === "requestOtp" ? (
                          <>
                            <Spinner className="size-4" /> {t("email.sending")}
                          </>
                        ) : (
                          t("email.verifyButton")
                        )}
                      </Button>
                    </div>
                    <FieldDescription className="font-mono text-xs">
                      {t("email.helper")}
                    </FieldDescription>
                    <FieldError errors={[form.formState.errors.email]} />

                    {otpRequested ? (
                      <div className="mt-4 border border-border/40 p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                              {t("otp.title")}
                            </p>
                            <p className="mt-1 font-mono text-xs text-muted-foreground">
                              {t("otp.sentTo")}{" "}
                              <span className="text-foreground/90">{email}</span>
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            className="rounded-none font-mono text-[10px] uppercase tracking-widest"
                            onClick={requestOtp}
                            disabled={busy !== null || ordered}
                          >
                            {t("otp.resendButton")}
                          </Button>
                        </div>

                        <div className="mt-4 flex flex-col gap-4">
                          <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={setOtp}
                            disabled={busy !== null || ordered}
                            containerClassName="justify-start"
                          >
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>

                          <FieldDescription className="font-mono text-xs">
                            {t("otp.expires")}
                          </FieldDescription>
                        </div>
                      </div>
                    ) : null}
                  </FieldContent>
                </Field>
              </FieldSet>

              <Separator className="opacity-40" />

              <FieldSet>
                <FieldLegend className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("design.legend")}
                </FieldLegend>
                <FieldDescription className="font-mono text-xs">
                  {t("design.helper")}
                </FieldDescription>

                <Field>
                  <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                    {t("design.primaryColorLabel")}
                  </FieldLabel>
                  <FieldContent>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) =>
                            form.setValue("primaryColor", e.target.value, { shouldValidate: true })
                          }
                          disabled={ordered}
                          aria-label="Primary color"
                          className={cn(
                            "h-9 w-14 cursor-pointer border border-border/60 bg-transparent p-1",
                            "disabled:cursor-not-allowed disabled:opacity-50"
                          )}
                        />
                        <InputGroup className="rounded-none">
                          <InputGroupAddon className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                            {t("design.hex")}
                          </InputGroupAddon>
                          <InputGroupInput
                            className="rounded-none font-mono uppercase"
                            value={primaryColor}
                            readOnly
                            aria-label={t("design.hexAria")}
                          />
                        </InputGroup>
                      </div>
                    </div>
                    <FieldDescription className="font-mono text-xs">
                      {t("design.primaryColorHelper")}
                    </FieldDescription>
                    <FieldError errors={[form.formState.errors.primaryColor]} />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                    {t("design.sectionsLabel")}
                  </FieldLabel>
                  <FieldContent>
                    <FieldDescription className="font-mono text-xs">
                      {t("design.sectionsHelper")}
                    </FieldDescription>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {sectionsCatalog.map((item) => {
                        const checked = sections.includes(item.id)
                        return (
                          <label
                            key={item.id}
                            className={cn(
                              "flex items-center gap-3 border border-border/40 p-3",
                              "hover:border-foreground/40 transition-colors",
                              checked ? "bg-accent/10 border-accent/40" : "bg-transparent"
                            )}
                          >
                            <Checkbox
                              checked={checked}
                              disabled={ordered}
                              onCheckedChange={(next) => {
                                const on = next === true
                                const current = form.getValues("sections")
                                const updated = on
                                  ? Array.from(new Set([...current, item.id]))
                                  : current.filter((x) => x !== item.id)
                                form.setValue("sections", updated, { shouldValidate: true })
                              }}
                            />
                            <span className="flex flex-col gap-0.5">
                              <span className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                                {item.label}
                              </span>
                              <span className="font-mono text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            </span>
                          </label>
                        )
                      })}
                    </div>
                    <FieldError errors={[form.formState.errors.sections]} />
                  </FieldContent>
                </Field>
              </FieldSet>
            </FieldGroup>

            {status ? (
              <div
                className={cn(
                  "border p-4 font-mono text-xs",
                  status.type === "ok"
                    ? "border-accent/40 bg-accent/10 text-foreground"
                    : "border-destructive/40 bg-destructive/10 text-foreground"
                )}
                role="status"
              >
                {status.message}
              </div>
            ) : null}

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {ordered ? t("footer.submitted") : t("footer.ready")}
              </p>
              <Button
                type="submit"
                className="rounded-none font-mono text-[10px] uppercase tracking-widest"
                disabled={busy !== null || ordered}
              >
                {busy === "submit" ? (
                  <>
                    <Spinner className="size-4" /> {t("footer.processing")}
                  </>
                ) : (
                  t("footer.submitButton")
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}


"use client"

import { useRef, useEffect } from "react"
import { WHATSAPP_LINK, PHONE_LINK, VIBER_LINK } from "@/components/cta-buttons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const t = useTranslations("HomePage.colophon")
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Content fade in
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Main CTA content */}
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        {/* Kicker */}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t("kicker")}
        </span>

        {/* Headline */}
        <h2 className="mt-4 font-(--font-bebas) text-5xl md:text-7xl lg:text-8xl tracking-tight">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        {/* Large CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp - Primary */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-green-600 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>{t("cta.whatsapp")}</span>
          </a>

          {/* Phone */}
          <a
            href={PHONE_LINK}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-foreground/20 px-8 py-4 font-mono text-sm uppercase tracking-widest hover:border-foreground/40 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>{t("cta.phone")}</span>
          </a>

          {/* Viber */}
          <a
            href={VIBER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-purple-500/30 text-purple-500 px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-purple-500/10 transition-colors"
          >
            <ViberIcon className="w-5 h-5" />
            <span>{t("cta.viber")}</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          {t("footer.tagline")}
        </p>
      </div>
    </section>
  )
}

// Icons
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.182.635 6.696.5 9.855c-.134 3.16-.3 9.094 5.57 10.72v2.468s-.037.998.62 1.202c.792.246 1.26-.51 2.018-1.328.416-.448.99-1.108 1.42-1.612 3.912.328 6.922-.423 7.264-.534.79-.256 5.262-.83 5.99-6.769.752-6.127-.363-10.003-2.39-11.762C19.386.773 15.621-.057 11.398.002z"/>
    </svg>
  )
}

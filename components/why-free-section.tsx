"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function WhyFreeSection() {
  const t = useTranslations("HomePage.whyFree")
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Content fade in
      const items = contentRef.current?.querySelectorAll(".why-animate")
      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
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
      id="why-free"
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-accent/5 border-y border-accent/20"
    >
      <div ref={contentRef} className="max-w-3xl">
        {/* Kicker */}
        <span className="why-animate font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t("kicker")}
        </span>

        {/* Title */}
        <h2 className="why-animate mt-4 font-(--font-bebas) text-4xl md:text-6xl lg:text-7xl tracking-tight">
          {t("title")}
        </h2>

        {/* Description */}
        <p className="why-animate mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
          {t("description")}
        </p>

        {/* Points - Win-Win */}
        <div className="why-animate mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* You get */}
          <div className="bg-card border border-border/50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-(--font-bebas) text-xl md:text-2xl text-accent">
                {t("points.0.you")}
              </span>
            </div>
            <p className="font-mono text-sm text-foreground">
              {t("points.0.benefit")}
            </p>
          </div>

          {/* We get */}
          <div className="bg-card border border-border/50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-(--font-bebas) text-xl md:text-2xl text-accent">
                {t("points.1.you")}
              </span>
            </div>
            <p className="font-mono text-sm text-foreground">
              {t("points.1.benefit")}
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <p className="why-animate mt-8 font-(--font-bebas) text-xl md:text-2xl text-foreground">
          {t("conclusion")}
        </p>
      </div>
    </section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

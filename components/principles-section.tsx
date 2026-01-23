"use client"

import { useRef, useEffect } from "react"
import { GetStartedButton } from "@/components/cta-buttons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

// Step icons
const stepIcons = [
  // Phone icon - Call
  <svg key="phone" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Chat icon - Chat
  <svg key="chat" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Code/Build icon - We build
  <svg key="build" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Gift/Deliver icon - You get it
  <svg key="gift" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="20 12 20 22 4 22 4 12" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="7" width="20" height="5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="22" x2="12" y2="7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

export function PrinciplesSection() {
  const t = useTranslations("HomePage.principles")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !stepsRef.current) return

    const ctx = gsap.context(() => {
      // Header fade in
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Steps stagger in
      const steps = stepsRef.current?.querySelectorAll(".step-card")
      if (steps) {
        gsap.fromTo(
          steps,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Get steps from translations
  const steps = [
    { numberKey: "items.0.number", titleKey: "items.0.title", descKey: "items.0.description" },
    { numberKey: "items.1.number", titleKey: "items.1.title", descKey: "items.1.description" },
    { numberKey: "items.2.number", titleKey: "items.2.title", descKey: "items.2.description" },
    { numberKey: "items.3.number", titleKey: "items.3.title", descKey: "items.3.description" },
  ]

  return (
    <section ref={sectionRef} id="principles" className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-12 md:mb-16 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t("kicker")}</span>
        <h2 className="mt-4 font-(--font-bebas) text-4xl md:text-6xl lg:text-7xl tracking-tight">{t("title")}</h2>
      </div>

      {/* Steps grid */}
      <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-card group relative bg-card border border-border/50 p-6 md:p-8 text-center hover:border-accent/50 transition-colors"
          >
            {/* Step number */}
            <div className="absolute top-4 left-4 font-mono text-xs text-accent">
              {t(step.numberKey)}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 text-muted-foreground group-hover:text-accent transition-colors">
              {stepIcons[index]}
            </div>

            {/* Title */}
            <h3 className="font-(--font-bebas) text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-accent transition-colors">
              {t(step.titleKey)}
            </h3>

            {/* Description */}
            <p className="font-mono text-xs text-muted-foreground">
              {t(step.descKey)}
            </p>

            {/* Connector line (except last) */}
            {index < 3 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <GetStartedButton variant="large">
          {t("cta")}
        </GetStartedButton>
      </div>
    </section>
  )
}

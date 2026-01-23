"use client"

import { useEffect, useRef } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import { CTAButtons } from "@/components/cta-buttons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const t = useTranslations("HomePage.hero")
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Simple fade out on scroll
      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Fade in elements on load
      const elements = contentRef.current?.querySelectorAll(".hero-animate")
      if (elements) {
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full max-w-4xl">
        {/* Headline */}
        <h1 className="hero-animate font-(--font-bebas) text-[clamp(3rem,12vw,8rem)] md:text-[clamp(4rem,10vw,10rem)] leading-[0.9] tracking-tight">
          {t("headline")}
        </h1>

        {/* Subline - Problem statement */}
        <p className="hero-animate mt-6 font-(--font-bebas) text-muted-foreground/80 text-[clamp(1.2rem,3vw,2rem)] tracking-wide">
          {t("subline")}
        </p>

        {/* Description */}
        <p className="hero-animate mt-4 max-w-lg font-mono text-base md:text-lg text-foreground font-medium">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="hero-animate mt-10">
          <CTAButtons variant="primary" />
        </div>

        {/* Stats Row */}
        <div className="hero-animate mt-12 flex flex-wrap items-center gap-6 md:gap-10">
          <StatItem label={t("stats.time")} />
          <div className="hidden md:block w-px h-8 bg-border" />
          <StatItem label={t("stats.price")} highlight />
          <div className="hidden md:block w-px h-8 bg-border" />
          <StatItem label={t("stats.limit")} />
          <div className="hidden md:block w-px h-8 bg-border" />
          <StatItem label={t("stats.guarantee")} icon />
        </div>
      </div>
    </section>
  )
}

function StatItem({ label, highlight, icon }: { label: string; highlight?: boolean; icon?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-sm md:text-base uppercase tracking-widest ${highlight ? "text-accent font-bold" : icon ? "text-green-500" : "text-muted-foreground"}`}>
      {icon && (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {label}
    </div>
  )
}

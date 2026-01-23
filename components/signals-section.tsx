"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { GetStartedButton } from "@/components/cta-buttons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

const problemIcons = [
  // Search/Globe icon - Tourists can't find you
  <svg key="search" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 8v6M8 11h6" strokeLinecap="round" />
  </svg>,
  // Competition icon - Competitors are online
  <svg key="competition" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="8" width="6" height="13" rx="1" />
    <rect x="15" y="4" width="6" height="17" rx="1" />
    <path d="M9 12h6M12 9v6" strokeLinecap="round" />
  </svg>,
  // Money icon - Web is expensive
  <svg key="money" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M9 9.5c0-1.38 1.34-2.5 3-2.5s3 1.12 3 2.5-1.34 2.5-3 2.5-3 1.12-3 2.5 1.34 2.5 3 2.5" strokeLinecap="round" />
  </svg>,
]

export function SignalsSection() {
  const t = useTranslations("HomePage.signals")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
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

      // Cards fade in
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Get items from translations
  const items = [
    { titleKey: "items.0.title", noteKey: "items.0.note" },
    { titleKey: "items.1.title", noteKey: "items.1.note" },
    { titleKey: "items.2.title", noteKey: "items.2.note" },
  ]

  return (
    <section id="signals" ref={sectionRef} className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t("kicker")}</span>
        <h2 className="mt-4 font-(--font-bebas) text-4xl md:text-6xl lg:text-7xl tracking-tight">{t("title")}</h2>
      </div>

      {/* Problem cards - Grid layout */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ProblemCard
            key={index}
            icon={problemIcons[index]}
            title={t(item.titleKey)}
            note={t(item.noteKey)}
            index={index}
          />
        ))}
      </div>

      {/* CTA at bottom */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <GetStartedButton variant="large">
          {t("cta")}
        </GetStartedButton>
      </div>
    </section>
  )
}

function ProblemCard({
  icon,
  title,
  note,
  index,
}: {
  icon: React.ReactNode
  title: string
  note: string
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative bg-card border border-border/50 p-6 md:p-8",
        "transition-all duration-300",
        "hover:border-accent/50 hover:bg-accent/5",
      )}
    >
      {/* Number */}
      <span className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="mb-6 text-accent/70 group-hover:text-accent transition-colors">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-(--font-bebas) text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-8 h-px bg-accent/40 mb-4 group-hover:w-16 transition-all duration-300" />

      {/* Description */}
      <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
        {note}
      </p>
    </article>
  )
}

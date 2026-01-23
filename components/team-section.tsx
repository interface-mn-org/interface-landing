"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function TeamSection() {
  const t = useTranslations("HomePage.team")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

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
        }
      )

      // Cards fade in
      const cards = cardsRef.current?.querySelectorAll(".team-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
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
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Team member data from translations
  const members = [
    { nameKey: "members.0.name", roleKey: "members.0.role", bioKey: "members.0.bio", initials: "E" },
    { nameKey: "members.1.name", roleKey: "members.1.role", bioKey: "members.1.bio", initials: "P" },
  ]

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t("kicker")}
        </span>
        <h2 className="mt-4 font-(--font-bebas) text-4xl md:text-6xl lg:text-7xl tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-4 font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Team Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="team-card group bg-card border border-border/50 p-6 md:p-8 text-center hover:border-accent/50 transition-colors"
          >
            {/* Avatar Placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-accent/20 flex items-center justify-center">
              <span className="font-(--font-bebas) text-3xl md:text-4xl text-accent">
                {member.initials}
              </span>
            </div>

            {/* Name */}
            <h3 className="font-(--font-bebas) text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
              {t(member.nameKey)}
            </h3>

            {/* Role */}
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
              {t(member.roleKey)}
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-accent/40 mx-auto my-4 group-hover:w-16 transition-all duration-300" />

            {/* Bio */}
            <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
              {t(member.bioKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

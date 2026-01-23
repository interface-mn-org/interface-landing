"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { GetStartedButton } from "@/components/cta-buttons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export function WorkSection() {
  const t = useTranslations("HomePage.work")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

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

      // Content fade in
      const items = contentRef.current?.querySelectorAll(".value-item")
      if (items) {
        gsap.fromTo(
          items,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Get value stack items from translations
  const valueStackItems = [
    { itemKey: "valueStack.0.item", priceKey: "valueStack.0.price" },
    { itemKey: "valueStack.1.item", priceKey: "valueStack.1.price" },
    { itemKey: "valueStack.2.item", priceKey: "valueStack.2.price" },
    { itemKey: "valueStack.3.item", priceKey: "valueStack.3.price" },
  ]

  // Get requirements from translations
  const requirementKeys = [
    "requirements.items.0",
    "requirements.items.1",
    "requirements.items.2",
  ]

  return (
    <section ref={sectionRef} id="work" className="relative py-24 md:py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t("kicker")}</span>
        <h2 className="mt-4 font-(--font-bebas) text-4xl md:text-6xl lg:text-7xl tracking-tight">{t("title")}</h2>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      {/* Value stack + Requirements grid */}
      <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Value Stack */}
        <div className="bg-card border border-border/50 p-6 md:p-10">
          {/* Value items */}
          <div className="space-y-4 mb-8">
            {valueStackItems.map((item, index) => (
              <div
                key={index}
                className="value-item flex items-center justify-between py-4 border-b border-border/30"
              >
                <span className="font-mono text-sm md:text-base text-foreground">
                  {t(item.itemKey)}
                </span>
                <span className="font-mono text-sm md:text-base text-muted-foreground line-through">
                  {t(item.priceKey)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="value-item pt-4 border-t-2 border-accent">
            <div className="flex items-center justify-between mb-2">
              <span className="font-(--font-bebas) text-xl md:text-2xl tracking-tight">
                {t("total.label")}
              </span>
              <span className="font-mono text-lg text-muted-foreground line-through">
                {t("total.originalPrice")}
              </span>
            </div>
            <div className="text-right">
              <span className="font-(--font-bebas) text-4xl md:text-6xl text-accent tracking-tight">
                {t("total.finalPrice")}
              </span>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="flex flex-col justify-center">
          <h3 className="value-item font-(--font-bebas) text-2xl md:text-3xl tracking-tight mb-6">
            {t("requirements.title")}
          </h3>

          <ul className="space-y-4 mb-8">
            {requirementKeys.map((key, index) => (
              <li
                key={index}
                className="value-item flex items-start gap-3"
              >
                <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-mono text-sm md:text-base text-muted-foreground">
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="value-item">
            <GetStartedButton variant="large">
              {t("cta")}
            </GetStartedButton>
          </div>
        </div>
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

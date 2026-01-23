"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { id: "hero", key: "index" },
  { id: "signals", key: "signals" },
  { id: "work", key: "experiments" },
  { id: "principles", key: "principles" },
  { id: "colophon", key: "colophon" },
]

export function SideNav() {
  const t = useTranslations("HomePage.nav")
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col justify-between py-10 border-r border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="px-4 flex justify-center">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 cursor-pointer"
          aria-label="Go to top"
        >
          <Logo className="opacity-90 hover:opacity-100 transition-opacity duration-200 rounded-xl overflow-hidden cursor-pointer" size={32} />
        </button>
      </div>

      <div className="flex flex-col gap-6 px-4 items-center flex-1 justify-center">
        {navItems.map(({ id, key }) => (
          <button key={id} onClick={() => scrollToSection(id)} className="group relative flex items-center gap-3">
            <span
              className={cn(
                "h-1.5 w-1.5 p-1 cursor-pointer rounded-full transition-all duration-300",
                activeSection === id ? "bg-accent scale-125" : "bg-muted-foreground/40 group-hover:bg-foreground/60",
              )}
            />
            <span
              className={cn(
                "absolute left-6 font-mono text-[10px] uppercase cursor-pointer tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
                activeSection === id ? "text-accent" : "text-muted-foreground",
              )}
            >
              {key}
            </span>
          </button>
        ))}
      </div>

      <div className="px-4">
        <div className="flex flex-col items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}

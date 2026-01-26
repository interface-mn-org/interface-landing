"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { LocaleSwitcherInline } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { MenuIcon, XIcon } from "lucide-react"

const navItems = [
  { id: "hero", key: "index" },
  { id: "signals", key: "signals" },
  { id: "work", key: "experiments" },
  { id: "principles", key: "principles" },
  { id: "colophon", key: "colophon" },
]

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 },
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
      setOpen(false)
    }
  }

  const activeLabel = useMemo(() => navItems.find((x) => x.id === activeSection)?.key ?? "index", [activeSection])

  return (
    <div className="md:hidden fixed top-[calc(env(safe-area-inset-top)+3rem)] left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-sm">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 cursor-pointer"
            aria-label="Go to top"
          >
            <Logo className="text-black" size={28} markClassName="text-black dark:text-white" glyphClassName="text-black dark:text-white" />
          </button>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LocaleSwitcherInline />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open ? "true" : "false"}
              className={cn(
                "h-8 px-3 rounded border border-border/40",
                "font-mono text-[10px] uppercase tracking-widest",
                "text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200",
              )}
            >
              {open ? <XIcon className="w-4 h-4 cursor-pointer text-accent" /> :
                <MenuIcon className="w-4 h-4 cursor-pointer text-accent" />
              }
            </button>
          </div>
        </div>

        {open ? (
          <div className="px-4 pb-4">
            <div className="mt-2 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "h-10 rounded border border-border/40",
                    "font-mono text-[10px] uppercase tracking-widest",
                    "transition-colors duration-200",
                    activeSection === item.id
                      ? "bg-accent/10 text-accent border-accent/40"
                      : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
                  )}
                >
                  {item.key}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}


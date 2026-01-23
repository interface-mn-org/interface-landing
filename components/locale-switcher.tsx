"use client"

import { useLocale } from "next-intl"
import { useCallback, useTransition } from "react"
import { cn } from "@/lib/utils"

type Locale = "en" | "mn"

function setLocaleCookie(locale: Locale) {
  // 1 year
  const maxAge = 60 * 60 * 24 * 365
  document.cookie = `locale=${locale}; path=/; max-age=${maxAge}`
}

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale
  const [, startTransition] = useTransition()

  const onSelect = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return
      setLocaleCookie(nextLocale)
      startTransition(() => {
        window.location.reload()
      })
    },
    [locale],
  )

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        onClick={() => onSelect("en")}
        aria-current={locale === "en" ? "true" : "false"}
        className={cn(
          "group relative inline-flex items-center justify-center cursor-pointer text-center",
          "h-8 w-8 rounded border border-border/40",
          "font-mono text-[10px] uppercase tracking-widest",
          "transition-colors duration-200",
          locale === "en"
            ? "bg-accent/10 text-accent border-accent/40"
            : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onSelect("mn")}
        aria-current={locale === "mn" ? "true" : "false"}
        className={cn(
          "group relative inline-flex items-center justify-center cursor-pointer text-center",
          "h-8 w-8 rounded border border-border/40",
          "font-mono text-[10px] uppercase tracking-widest",
          "transition-colors duration-200",
          locale === "mn"
            ? "bg-accent/10 text-accent border-accent/40"
            : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
        )}
      >
        MN
      </button>
    </div>
  )
}

export function LocaleSwitcherInline({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale
  const [, startTransition] = useTransition()

  const onSelect = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return
      setLocaleCookie(nextLocale)
      startTransition(() => {
        window.location.reload()
      })
    },
    [locale],
  )

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={() => onSelect("en")}
        aria-current={locale === "en" ? "true" : "false"}
        className={cn(
          "group relative inline-flex items-center justify-center cursor-pointer text-center",
          "h-8 w-8 rounded border border-border/40",
          "font-mono text-[10px] uppercase tracking-widest",
          "transition-colors duration-200",
          locale === "en"
            ? "bg-accent/10 text-accent border-accent/40"
            : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onSelect("mn")}
        aria-current={locale === "mn" ? "true" : "false"}
        className={cn(
          "group relative inline-flex items-center justify-center cursor-pointer text-center",
          "h-8 w-8 rounded border border-border/40",
          "font-mono text-[10px] uppercase tracking-widest",
          "transition-colors duration-200",
          locale === "mn"
            ? "bg-accent/10 text-accent border-accent/40"
            : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
        )}
      >
        MN
      </button>
    </div>
  )
}


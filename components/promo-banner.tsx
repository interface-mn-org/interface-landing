"use client"

import { useTranslations } from "next-intl"

export function PromoBanner() {
  const t = useTranslations("Common.promo")

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="pt-[env(safe-area-inset-top)] bg-background/80 backdrop-blur-sm border-b border-border/30">
        <div className="h-12 px-4 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/90 text-center truncate">
              {t("banner")}
            </p>
            <a
              href="/free-landing"
              target="_blank"
              className="shrink-0 inline-flex items-center justify-center h-6 px-2 rounded border border-accent/40 bg-accent/10 text-accent hover:bg-accent/15 transition-colors duration-200 font-mono text-[10px] uppercase tracking-widest"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


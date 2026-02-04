import type { Metadata } from "next"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.TermsOfService")
  return {
    title: t("metaTitle"),
  }
}

export default async function TermsOfServicePage() {
  const t = await getTranslations("Legal.TermsOfService")

  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          ← {t("backLink")}
        </Link>
        <h1 className="mt-8 font-(--font-bebas) text-4xl tracking-wide md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {t("lastUpdated")}: January 2026
        </p>
        <p className="mt-6 font-mono text-sm leading-relaxed text-foreground">
          {t("intro")}
        </p>
        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
              {t("section1Title")}
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
              {t("section1Body")}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
              {t("section2Title")}
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
              {t("section2Body")}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
              {t("section3Title")}
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
              {t("section3Body")}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
              {t("section4Title")}
            </h2>
            <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
              {t("section4Body")}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

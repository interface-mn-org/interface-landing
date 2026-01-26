import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

type Locale = "en" | "mn"

export default getRequestConfig(async () => {
  const store = await cookies()
  const raw = store.get("locale")?.value

  // Default language: Mongolian
  const locale: Locale = raw === "en" || raw === "mn" ? raw : "mn"

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

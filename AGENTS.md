# AGENTS.md

This file provides guidance to agentic coding assistants working in this repository.

## Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000

# Build & Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint (extends next/core-web-vitals, next/typescript)
```

No test framework is configured. Add tests in `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files when implementing.

## Code Style

### Imports

Use explicit `import * as React from "react"` for React. Group imports with blank lines: standard library, third-party, then internal (`@/*` alias).

```tsx
"use client"

import { useMemo, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

### Formatting

- No semicolons
- Double quotes for strings
- Arrow functions with explicit/implicit return
- `className` prop for Tailwind classes
- Use `cn()` from `@/lib/utils` for conditional class merging

### Types

Strict TypeScript enabled. Define explicit types for complex objects.

```tsx
type FormValues = { companyType: string; email: string }
const t = useTranslations("FreeLanding" as any) as unknown as (key: string) => string
```

Use `as unknown as` sparingly for type assertions (e.g., next-intl workarounds).

### Naming Conventions

- Components: PascalCase (`Button`, `HeroSection`)
- Functions: camelCase (`getOtpStore`, `verifyOtp`)
- Constants: UPPER_SNAKE_CASE (`OTP_CHALLENGE_COOKIE`)
- Files: kebab-case (`button.tsx`, `free-landing.ts`)

### Error Handling

```tsx
try {
  const resp = await fetch("/api/endpoint")
  const data = await resp.json()
} catch {
  setStatus({ type: "error", message: t("error.network") })
} finally {
  setBusy(null)
}
```

API routes: return `{ ok: false, error: string }` with appropriate HTTP status codes.

### State & Effects

```tsx
const [busy, setBusy] = useState<null | "requestOtp" | "submit">(null)
const ref = useRef<HTMLElement>(null)

useEffect(() => {
  const ctx = gsap.context(() => {}, ref)
  return () => ctx.revert()
}, [])
```

### Components

- Server components by default (no "use client")
- Client components: top `"use client"` directive
- Minimal default exports, type props inline

```tsx
"use client"
export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(base, className)} {...props} />
}
```

### Styling

- Tailwind CSS utility classes with `dark:` prefix (dark mode always enabled)
- `cn()` merges classes with `clsx` + `tailwind-merge`
- Variants via `class-variance-authority` (cva)
- Shadcn/ui primitives for consistent UI

### Internationalization (next-intl)

Server: `const t = await getTranslations("HomePage.hero")`
Client: `const t = useTranslations("FreeLanding" as any) as unknown as (key: string) => string`

Messages in `messages/en.json`, `messages/mn.json`, namespaced by section.

### API Routes

```tsx
export async function POST(req: Request) {
  try {
    const body = await req.json() as { email?: string }
    const email = typeof body.email === "string" ? body.email.trim() : ""
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[api-name] error", e)
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }
}
```

### Global State

Server-side with `declare global`:

```ts
declare global { var __freeLandingOtpStore: Map<string, OtpRecord> | undefined }
function getOtpStore() {
  if (!globalThis.__freeLandingOtpStore) {
    globalThis.__freeLandingOtpStore = new Map()
  }
  return globalThis.__freeLandingOtpStore
}
```

### Security

- Use `crypto.timingSafeEqual()` for comparisons
- HMAC for cookie signing
- Cookies: `httpOnly`, `sameSite: "lax"`, `secure` in production
- Environment variables: `NEXT_PUBLIC_*` for client, others server-only

### Animations

```tsx
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
  gsap.to(ref.current, { y: -100, scrollTrigger: { trigger: ref, scrub: true } })
}, [])
```

Framer Motion for component animations, Lenis for smooth scrolling (`<SmoothScroll>` wrapper).

### Form Validation

Use `react-hook-form` + `zod`:

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: "" } })
```

### Path Aliases

`@/*` maps to project root. Use for all internal imports:

```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

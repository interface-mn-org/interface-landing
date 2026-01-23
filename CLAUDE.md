# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## Architecture

This is a Next.js 16 landing page with App Router, internationalization (next-intl), and a multi-step form with OTP verification.

### Directory Structure

- `app/` - Next.js App Router pages and API routes
  - `page.tsx` - Main landing page (server component)
  - `layout.tsx` - Root layout with i18n providers
  - `free-landing/` - Form page for requesting free landing pages (client component)
  - `api/free-landing/` - OTP verification and order API routes
- `components/` - React components
  - `ui/` - shadcn/ui primitives (Button, Input, Select, etc.)
  - Page sections: `hero-section.tsx`, `signals-section.tsx`, `work-section.tsx`, `principles-section.tsx`, `colophon-section.tsx`
  - Animation components: `animated-noise.tsx`, `scramble-text.tsx`, `split-flap-text.tsx`, `smooth-scroll.tsx`
  - Navigation: `side-nav.tsx`, `mobile-nav.tsx`
- `lib/` - Utilities
  - `utils.ts` - `cn()` class merge utility (clsx + tailwind-merge)
  - `free-landing.ts` - OTP generation, HMAC signing, verification logic
- `messages/` - i18n translation files (`en.json`, `mn.json`)
- `i18n/request.ts` - next-intl server configuration

### Key Patterns

**Internationalization (next-intl):**
- Locale stored in cookies, read via `i18n/request.ts`
- Server: `const t = await getTranslations("HomePage.hero")`
- Client: `const t = useTranslations("HomePage.hero")`
- Messages namespaced by page/section in JSON files

**Form with OTP Flow (`free-landing/`):**
- react-hook-form + zod validation
- Steps: company info → email OTP verification → design choices
- OTP system uses HMAC-signed cookies for session security

**Styling:**
- Tailwind CSS v4 with CSS variables for theming
- Dark mode always enabled (`className="dark"` on html)
- Fonts: IBM Plex Sans, IBM Plex Mono, Bebas Neue (Google Fonts)

**Animations:**
- GSAP with ScrollTrigger for scroll-based animations
- Framer Motion for component animations
- Lenis for smooth scrolling (wrapped via `SmoothScroll` component)

### Path Aliases

`@/*` maps to project root (configured in tsconfig.json)

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

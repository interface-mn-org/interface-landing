# Interface Landing Page - SME Content Update Plan

## Goal
Transform the landing page messaging from startup-focused to SME-focused (salons, restaurants, cafes, service businesses) while keeping the current template/design vibe. Focus on:
- **FREE website offer** + revenue growth
- **Problem-based messaging** (simple, 5th grade level)
- **CTAs in every section** (WhatsApp/Phone/Viber)
- **Simplified animations** for faster load on basic phones

---

## Business Context (Important!)

**Who we are:** 2 software engineers in Ulaanbaatar, new company, no testimonials yet

**Strategy:** Alex Hormozi approach - give value first (free websites), build trust, then monetize with:
- Reservation systems
- Automations
- Reports/dashboards
- AI implementations

**The Tourist Wave Opportunity (Summer 2025):**
- Mongolia is getting massive global attention: Netflix shows, social media, Physical Asia events
- Foreign tourists use **Google** and **ChatGPT** to search for salons, restaurants, cafes
- SMEs without websites = **invisible to tourists**
- This is our monetization wave - help SMEs get found, then upsell services

**Key Messaging Angle:**
> "Гадаадын жуулчин Google-ээс хайхад таныг олохгүй байна"
> (Foreign tourists can't find you on Google)

---

## Key Changes Overview

| Area | Current | New |
|------|---------|-----|
| Target | Startups, tech founders | SMEs (salons, restaurants, cafes) |
| Headline | "INTERFACE" split-flap | "ҮНЭГҮЙ ВЭБСАЙТ" - Free website focus |
| Messaging | Technical (MVP, scalable) | Simple (free, more customers, grow revenue) |
| CTAs | "See Work" / "Explore" | WhatsApp / Phone / Viber in EVERY section |
| Animations | Heavy (split-flap, GSAP) | Light (subtle fades only) |
| Language | English-first | Mongolian-first for SME audience |

---

## Files to Modify

### 1. Hero Section
**File:** `components/hero-section.tsx`

**Changes:**
- Remove split-flap animation component
- Simplify to standard animated headline
- Add badge: "Улаанбаатарын 2 инженер"
- Update structure for CTA buttons (WhatsApp/Phone/Viber)
- Add stats row: "48 цаг", "₮0 ҮНЭГҮЙ", "100+ бизнес"

**New Hero Structure:**
```
[Badge: Улаанбаатарын 2 инженер]

[Headline: ҮНЭГҮЙ ВЭБСАЙТ] - CONFIRMED

[Subline - Tourist + Free angle:]
"Гадаадын жуулчин Google-ээс хайхад таны бизнесийг олохгүй байна.
Бусад сая сая авдаг. Бид ҮНЭГҮЙ хийж өгнө."

[3 CTA buttons: WhatsApp | Утас | Viber]

[Stats row:]
48 цагт бэлэн | ₮0 ҮНЭГҮЙ | Эхний 1000 бизнест
```

**Hero Messaging Goals:**
1. Immediately show FREE offer
2. Create urgency (tourist wave, limited spots)
3. Pain point (tourists can't find you)
4. Clear CTA (WhatsApp is primary)

### 2. Signals Section (Services → Problem/Pain Points)
**File:** `components/signals-section.tsx`

**Changes:**
- Reframe from "services" to "problems we solve"
- 3-4 pain point cards with TOURIST ANGLE:
  1. "Гадаадын жуулчин таныг олохгүй" (Foreign tourists can't find you)
     - Google, ChatGPT-ээс хайхад гарахгүй
     - Summer 2025 = tourist wave coming
  2. "Өрсөлдөгч нар онлайн байна" (Competitors are online)
     - Хажуугийн дэлгүүр вэбтэй, та үгүй
  3. "Веб хийлгэх үнэтэй байдаг" (Web is expensive)
     - Бусад сая сая авдаг
     - Бид ҮНЭГҮЙ
  4. (Optional) "Одоогийн сайт хуучирсан" (Current site is outdated)
     - Удаан, утсанд харагдахгүй
- Add WhatsApp CTA at section end

### 3. Work Section → Value Stack / Free Offer
**File:** `components/work-section.tsx`

**Changes:**
- Transform from "portfolio" to "what you get FREE"
- Show value stack (Alex Hormozi style):
  - Landing page: ₮3,000,000 ~~struck through~~
  - Design: ₮1,000,000 ~~struck through~~
  - Mobile responsive: ₮500,000 ~~struck through~~
  - 30 days support: ₮200,000 ~~struck through~~
  - **TOTAL: ₮0 ҮНЭГҮЙ**
- Requirements to qualify (simple list)
- WhatsApp CTA button

### 4. Principles Section → Process (How It Works)
**File:** `components/principles-section.tsx`

**Changes:**
- Simplify to 4 easy steps:
  1. Залгах (Call us)
  2. Ярилцах (30 min chat)
  3. Бид хийнэ (We build)
  4. Танд өгнө (You get it)
- Add WhatsApp CTA

### 5. Colophon Section → Final CTA
**File:** `components/colophon-section.tsx`

**Changes:**
- Headline: "ОДОО ЗАЛГААРАЙ" (Call Now)
- Large WhatsApp/Phone/Viber buttons
- Simple footer with "Interface © 2025 | Ulaanbaatar"
- Remove complex grid layout, simplify

### 6. Translation Files
**Files:** `messages/en.json`, `messages/mn.json`

**Changes:**
- Complete rewrite of all copy
- SME-friendly language (no tech jargon)
- Focus on results: "more customers", "grow revenue", "look professional"
- Add CTA text translations
- Update metadata for SEO

### 7. Promo Banner
**File:** `components/promo-banner.tsx`

**Changes:**
- Update copy to emphasize FREE offer
- Make CTA more prominent

---

## New Components to Create

### 1. WhatsApp/Phone CTA Component
**File:** `components/cta-buttons.tsx`

Reusable component for consistent CTAs:
```tsx
// Props: variant (primary/secondary), showPhone, showViber
// Links:
// WhatsApp: https://wa.me/97695059075?text=Сайн байна уу, үнэгүй landing page авмаар байна
// Phone: tel:+97695059075
// Viber: viber://chat?number=97695059075
```

---

## Animation Simplification

### Remove:
- `components/split-flap-text.tsx` - Remove from hero
- Complex GSAP ScrollTrigger parallax effects
- Custom cursor effects in signals section

### Keep (simplified):
- Basic fade-in on scroll (lightweight)
- Hover effects on buttons
- Subtle transitions

---

## Copy Guidelines (5th Grade Level)

### Don't Use:
- MVP, production-ready, scalable
- Architecture, iteration, deployment
- SEO, conversion, optimization

### Do Use:
- "Үнэгүй" (Free)
- "Илүү олон хүн залгана" (More people will call)
- "Мэргэжлийн харагдана" (Look professional)
- "48 цагт бэлэн" (Ready in 48 hours)
- "Бусад сая сая авдаг" (Others charge millions)

### Tourist Wave Messaging (KEY DIFFERENTIATOR):
- "Гадаадын жуулчин Google-ээс хайдаг" (Foreign tourists search on Google)
- "ChatGPT-ээс хайхад таныг санал болгохгүй" (ChatGPT won't recommend you)
- "Зун гэхэд жуулчин дүүрнэ" (Summer = tourists everywhere)
- "Netflix, Social Media-гаар Монгол алдаршиж байна" (Mongolia is going viral)
- "Жуулчин ирнэ, та бэлэн үү?" (Tourists are coming, are you ready?)

### Urgency Messaging:
- "Зуны улирал эхлэхээс өмнө бэлэн бол" (Be ready before summer season)
- "Эхний 1000 бизнест ҮНЭГҮЙ" (First 1000 businesses FREE)
- "Одоо л энэ боломж байна" (This opportunity is NOW)

---

## CTA Links (Confirmed)

```tsx
// WhatsApp (primary)
href="https://wa.me/97695059075?text=Сайн байна уу, үнэгүй landing page авмаар байна"

// Phone
href="tel:+97695059075"

// Viber
href="viber://chat?number=97695059075"
```

---

## Implementation Order

### Phase 1: Content & Copy
1. Update `messages/mn.json` with new SME copy
2. Update `messages/en.json` (secondary, for English speakers)
3. Test translations load correctly

### Phase 2: Hero Section
1. Simplify hero-section.tsx (remove split-flap)
2. Add badge + new headline structure
3. Create cta-buttons.tsx component
4. Add stats row
5. Test on mobile

### Phase 3: Other Sections
1. Update signals-section.tsx → Problem section
2. Update work-section.tsx → Value stack
3. Update principles-section.tsx → 4 steps process
4. Update colophon-section.tsx → Final CTA

### Phase 4: Polish
1. Remove unused animation components
2. Test all WhatsApp/Phone/Viber links
3. Test mobile responsiveness
4. Verify Mongolian text displays correctly

---

## Verification Checklist

- [ ] All text in simple Mongolian (no tech jargon)
- [ ] WhatsApp link opens correctly on mobile
- [ ] Phone link initiates call
- [ ] Viber link opens app
- [ ] CTAs visible in every section
- [ ] Page loads fast on basic phones
- [ ] Stats show: 48 hours, FREE, 100+ businesses
- [ ] Value stack shows crossed-out prices → ₮0
- [ ] Mobile responsive on all screen sizes

---

## Reference: Alex Hormozi / Acquisition.com Style

**What to emulate:**
- Direct question/statement headlines
- Clear value proposition upfront
- Social proof with numbers
- Simple process steps
- Strong, repeated CTAs
- "What you get" value stacking
- Contrast (others charge X, we give FREE)


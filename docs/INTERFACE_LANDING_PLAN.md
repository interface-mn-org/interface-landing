# Interface Landing Page - Implementation Plan

## Business Context

**Agency:** Interface
**Founders:** 2 software engineers in Ulaanbaatar, Mongolia
**Strategy:** Alex Hormozi approach - give value first (free landing pages), build trust, then upsell to automation/recurring services
**Goal:** Build 1000 landing pages for SMEs, convert to paid services
**Target:** B2B - SME business owners (salons, restaurants, cafes, service businesses)

---

## Template Decision

**Use:** `example-landing-page/` (v0 template - "Brillance")
**Why:** Modern, clean design. Already has all shadcn/ui components. Beautiful animations.
**Approach:** Adapt template for Interface branding, not build from scratch.

---

## Sections to Keep/Modify/Remove

| v0 Section | Interface Version | Notes |
|------------|---------------|-------|
| Navigation | Keep | Change "Brillance" → "Interface" |
| Hero | Modify | Simple headline, WhatsApp/Phone CTA |
| Feature Cards | Modify | Show 3 benefits (not features) |
| Social Proof | Remove for now | No testimonials yet |
| Bento Grid | Remove | Too complex for SME audience |
| Documentation | Remove | Not needed |
| Testimonials | Remove for now | Add later when we have them |
| Pricing | Modify → Free Offer | Show value stack ($2800 → $0) |
| FAQ | Keep | Translate to Mongolian |
| CTA | Modify | WhatsApp/Phone/Viber buttons |
| Footer | Keep | Interface branding |

---

## New Section Structure

```
1. Header (nav)
   - Interface logo + name
   - Simple nav: "Үнэ" (Pricing), "Холбоо барих" (Contact)
   - CTA: WhatsApp button

2. Hero
   - Badge: "Улаанбаатарын 2 инженер"
   - Headline: "Үнэгүй Landing Page - 48 цагт бэлэн"
   - Subline: Simple benefit statement
   - CTAs: WhatsApp / Утас / Viber buttons
   - Stats: "48 цаг", "Үнэгүй", "100+ бизнес" (goal)

3. Problem Section (new)
   - 3 pain points SME owners understand:
     - "Хүмүүс таныг олохгүй байна" (People can't find you)
     - "Өрсөлдөгч нар онлайн байна" (Competitors are online)
     - "Веб сайт хийлгэх үнэтэй" (Web is expensive)

4. Free Offer Section
   - Headline: "Бүгдийг бид хийнэ. Үнэгүй."
   - Value stack (visual, in MNT):
     - Landing page: ₮3,000,000
     - Design: ₮1,000,000
     - Mobile responsive: ₮500,000
     - 30 хоног support: ₮200,000
     - Total: ₮4,700,000 → ₮0 ҮНЭГҮЙ
   - Requirements to qualify (simple):
     - Бизнес эрхэлдэг
     - Утсаар ярих боломжтой
     - 7 хоногт бэлэн болно
   - CTA: WhatsApp

5. Process Section
   - 4 simple steps (icons + text):
     1. Залгах (Call us)
     2. Ярилцах (30 min chat)
     3. Хийнэ (We build)
     4. Танд өгнө (You get it)

6. About Us (new)
   - "Interface бол бид хоёр"
   - Photo placeholder
   - Simple story: 2 engineers, Ulaanbaatar
   - Keep credentials simple

7. FAQ
   - 5-6 questions SME owners would ask
   - Simple Mongolian answers

8. Final CTA
   - "Одоо залгаарай"
   - WhatsApp / Phone / Viber
   - Phone: 95059075

9. Footer
   - Interface © 2025
   - Ulaanbaatar, Mongolia
   - Social links (optional)
```

---

## Messaging Guide (5th Grade Level)

### Principles
- No tech jargon
- Short sentences
- Focus on results, not process
- Use "you" language
- Numbers are good (48 hours, ₮0, etc.)

### Examples

**Bad (too technical):**
> "Conversion-optimized, SEO-friendly landing page with responsive design"

**Good (5th grade):**
> "Веб сайттай болоход илүү олон хүн танд залгана"

**Bad:**
> "We leverage AI-powered automation to streamline your workflow"

**Good:**
> "Бид хийнэ. Та зүгээр л хүлээнэ."

---

## Contact CTAs

```tsx
// WhatsApp (primary)
href="https://wa.me/97695059075?text=Сайн байна уу, үнэгүй landing page авмаар байна"

// Phone
href="tel:+97695059075"

// Viber
href="viber://chat?number=97695059075"
```

---

## Branding (Confirmed)

**Name:** Interface
**Colors:** Blue theme
- Primary: #08378E
- Text dark: #0a0a0a
- Background: #fafafa / white
- Accent: Lighter blue for hovers

**Logo:** Text only "Interface" (simple, clean)

**Currency:** MNT (₮) - local currency for SME owners
**Subdomain mention:** No - keep messaging simple, don't mention technical details

---

## Files to Modify

### From `example-landing-page/`:

| File | Action | Changes |
|------|--------|---------|
| `app/page.tsx` | Heavy modify | Restructure sections |
| `app/layout.tsx` | Modify | Mongolian lang, meta tags |
| `components/header.tsx` | Create new | Interface nav |
| `components/hero-section.tsx` | Rewrite | Mongolian, WhatsApp CTA |
| `components/pricing-section.tsx` | Modify → FreeOffer | Value stack |
| `components/faq-section.tsx` | Modify | Mongolian Q&A |
| `components/cta-section.tsx` | Modify | WhatsApp/Phone/Viber |
| `components/footer-section.tsx` | Modify | Interface branding |

### New components to create:

| File | Purpose |
|------|---------|
| `components/problem-section.tsx` | 3 pain points |
| `components/process-section.tsx` | 4 steps |
| `components/about-section.tsx` | "Interface is us" |
| `components/whatsapp-float.tsx` | Floating WhatsApp button |

### Delete (not needed):
- `smart-simple-brilliant.tsx`
- `your-work-in-sync.tsx`
- `effortless-integration.tsx`
- `numbers-that-speak.tsx`
- `documentation-section.tsx`
- `testimonials-section.tsx` (for now)
- `dashboard-preview.tsx`

---

## Technical Notes

1. **Keep from template:**
   - shadcn/ui components (`/components/ui/`)
   - Tailwind config
   - Decorative patterns (diagonal lines)
   - Badge component
   - Basic layout structure

2. **Modify:**
   - Font: Consider Mongolian-friendly font
   - Colors: Match Interface brand
   - `lang="mn"` in html

3. **Add:**
   - WhatsApp/Viber link handlers
   - Analytics (keep PostHog if configured)
   - Mongolian font support

---

## Implementation Order

1. **Phase 1: Structure**
   - Copy template to working directory
   - Remove unused sections/components
   - Set up basic page structure

2. **Phase 2: Branding**
   - Update Interface name/logo
   - Set colors
   - Update meta tags

3. **Phase 3: Content**
   - Write Mongolian copy for each section
   - Keep it simple (5th grade)
   - Add WhatsApp/Phone CTAs

4. **Phase 4: Polish**
   - Test mobile responsiveness
   - Test WhatsApp/Phone links
   - Add floating WhatsApp button

5. **Phase 5: Deploy**
   - Deploy to Vercel
   - Connect interface.mn domain

---

## Verification

- [ ] All text in Mongolian
- [ ] WhatsApp link works on mobile
- [ ] Phone link works
- [ ] Viber link works
- [ ] Mobile responsive
- [ ] Fast load time
- [ ] Meta tags correct for Mongolian SEO

---

## Decisions Made

- [x] **Colors:** Blue (#08378E)
- [x] **Logo:** Text only "Interface"
- [x] **Currency:** MNT (₮)
- [x] **Subdomain:** Don't mention (keep simple)
- [ ] **Photo:** Need photo of founders for About section (optional)

---

## Next Steps After Approval

1. Set up working directory (use `example-landing-page/` or copy)
2. Start with Hero + CTA (most important)
3. Add sections one by one
4. Test frequently
5. Deploy early, iterate

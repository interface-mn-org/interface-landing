import { HeroSection } from "@/components/hero-section"
import { WhyFreeSection } from "@/components/why-free-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { TeamSection } from "@/components/team-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"
import { MobileNav } from "@/components/mobile-nav"
import { PromoBanner } from "@/components/promo-banner"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <h1>INTERFACE</h1>
      <PromoBanner />
      <MobileNav />
      <div className="md:hidden h-[calc(2rem+3.5rem+env(safe-area-inset-top))]" aria-hidden="true" />
      <div className="hidden md:block h-8" aria-hidden="true" />
      <SideNav />
      <div className="relative z-10">
        <HeroSection />
        <WhyFreeSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <TeamSection />
        <ColophonSection />
      </div>
    </main>
  )
}

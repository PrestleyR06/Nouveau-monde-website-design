import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { IntroStory } from "@/components/sections/intro-story"
import { SignatureMenu } from "@/components/sections/signature-menu"
import { Gaming } from "@/components/sections/gaming"
import { Stats } from "@/components/sections/stats"
import { Gallery } from "@/components/sections/gallery"
import { Promotions } from "@/components/sections/promotions"
import { Reviews } from "@/components/sections/reviews"
import { ReservationCta } from "@/components/sections/reservation-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <IntroStory />
        <SignatureMenu />
        <Gaming />
        <Stats />
        <Gallery />
        <Promotions />
        <Reviews />
        <ReservationCta />
      </main>
      <SiteFooter />
    </>
  )
}

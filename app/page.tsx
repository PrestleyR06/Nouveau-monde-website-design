'use client'

import { useEffect } from "react"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { IntroStory } from "@/components/sections/intro-story"
import { SignatureMenu } from "@/components/sections/signature-menu"
import { Gaming } from "@/components/sections/gaming"
import { Stats } from "@/components/sections/stats"
import { Gallery } from "@/components/sections/gallery"
import { Promotions } from "@/components/sections/promotions"
import { Reviews } from "@/components/sections/reviews"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  useEffect(() => {
    // Check if user is returning from menu page
    const shouldScrollToMenu = sessionStorage.getItem('scrollToMenu')
    if (shouldScrollToMenu) {
      sessionStorage.removeItem('scrollToMenu')
      
      // Wait for page to be fully rendered, then scroll to menu section
      setTimeout(() => {
        const menuSection = document.getElementById('menu')
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

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
      </main>
      <SiteFooter />
    </>
  )
}

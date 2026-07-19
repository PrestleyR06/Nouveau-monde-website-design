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
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    
    // Handle scroll-to-menu (from return button on menu page)
    if (shouldScrollToMenu) {
      sessionStorage.removeItem('scrollToMenu')
      setTimeout(() => {
        const menuSection = document.getElementById('menu')
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
    
    // Handle scroll-to-section (from menu navigation)
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection')
      setTimeout(() => {
        const section = document.querySelector(scrollToSection)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

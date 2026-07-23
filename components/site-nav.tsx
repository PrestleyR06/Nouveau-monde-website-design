'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, restaurant } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const handleNavLinkClick = useCallback((href: string) => {
    setOpen(false)
    
    // If on menu page, navigate to home first
    if (pathname === '/menu') {
      sessionStorage.setItem('scrollToSection', href)
      router.push('/')
    } else {
      // Already on homepage, scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [pathname, router])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a href="#accueil" className="group flex items-center gap-2" aria-label="Nouveau Monde, accueil">
          <Image
            src="/images/logo.png"
            alt="Nouveau Monde Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 lg:flex">
            <li>
              <button
                onClick={() => handleNavLinkClick('#menu')}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Menu
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          </ul>

          <a
            href="https://wa.me/237689812704"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            Réserver
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary/10 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-background/40 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm sm:max-w-xs flex-col border-l border-border bg-background/95 backdrop-blur-xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ top: 0 }}
            >
              {/* Header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/50 px-5 sm:h-20 sm:px-8">
                <Image
                  src="/images/logo.png"
                  alt="Nouveau Monde Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <button
                onClick={() => handleNavLinkClick('#menu')}
                className="block w-full border-b border-border/30 px-5 py-5 text-left font-serif text-2xl text-foreground transition-colors hover:text-primary active:bg-primary/5 sm:px-8"
              >
                Menu
              </button>

              {/* Footer Content */}
              <motion.div
                className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-6 sm:px-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-6">
                  <a
                    href="https://wa.me/237689812704"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-full bg-primary px-6 py-4 text-center font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-glow"
                  >
                    Réserver sur WhatsApp
                  </a>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="block w-full rounded-full border border-primary/40 px-6 py-4 text-center text-sm font-medium transition-all hover:border-primary/80 hover:bg-primary/5"
                  >
                    <Phone className="inline h-4 w-4 mr-2" /> {restaurant.phone}
                  </a>
                </div>
                <div className="border-t border-border/30 pt-6 mt-auto text-xs text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Horaires d&apos;ouverture</p>
                  <p>Lundi à Mercredi: 12h - 23h</p>
                  <p>Jeudi à Dimanche: 12h - 02h</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

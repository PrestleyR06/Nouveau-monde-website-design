'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, restaurant } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/237689812704"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            Réserver
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
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
            />
            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-border bg-background/95 backdrop-blur-xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex h-16 items-center justify-between border-b border-border/50 px-5 sm:h-20 sm:px-8">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <motion.ul
                className="flex flex-col px-5 pt-4 sm:px-8"
                initial="hidden"
                animate="show"
                variants={{
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border/30 py-6 font-serif text-2xl transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="flex-1 flex flex-col justify-between px-5 pt-8 pb-6 sm:px-8"
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
                <div className="border-t border-border/30 pt-6 mt-6 text-xs text-muted-foreground space-y-2">
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

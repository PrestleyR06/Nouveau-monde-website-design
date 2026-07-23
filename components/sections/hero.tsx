'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { restaurant } from '@/lib/data'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png_2K_202607060108-JpU43fMsgQWSpEgLISeLn9gmCMaAjL.jpeg"
          alt="Plat savoureux avec crevettes et salade - Nouveau Monde"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24"
      >


        <h1 className="max-w-4xl text-balance font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              L&apos;art de recevoir,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gradient-gold italic"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              réinventé.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
        >
          {restaurant.description} Vivez une expérience cinématographique où
          gastronomie, lounge et jeux d&apos;exception se rencontrent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="https://wa.me/237689812704"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
          >
            Réserver sur WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/20 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
          >
            Découvrir le menu
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  )
}

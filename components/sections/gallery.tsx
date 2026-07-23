'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { gallery } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'

const spanClasses: Record<string, string> = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
  normal: '',
}

export function Gallery() {
  return (
    <section id="galerie" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Galerie
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              L&apos;ambiance <span className="italic text-gradient-gold">Nouveau Monde</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 md:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.06}
              className={cn('group relative overflow-hidden rounded-xl', img.span !== 'normal' && 'hidden sm:block', spanClasses[img.span ?? 'normal'])}
            >
              <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                <Image src={img.src || '/placeholder.svg'} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

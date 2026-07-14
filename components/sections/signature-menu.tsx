'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { signatureItems } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import type { MenuItem } from '@/types'

function FoodCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group relative h-full overflow-hidden rounded-xl border border-border bg-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image || '/placeholder.svg'}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {item.signature && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Signature
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3 p-6">
          <h3 className="font-serif text-2xl leading-tight">{item.name}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function SignatureMenu() {
  return (
    <section id="menu" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Le menu
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Nos créations <span className="italic text-gradient-gold">signatures</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="https://wa.me/237689812704"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              Voir la carte complète
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureItems.map((item, i) => (
            <FoodCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

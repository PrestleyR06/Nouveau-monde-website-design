'use client'

import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { promotions } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'

export function Promotions() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Promotions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Des offres <span className="italic text-gradient-gold">à savourer</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {promotions.map((promo, i) => (
            <Reveal key={promo.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={cn(
                  'relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-xl border p-8',
                  promo.highlight
                    ? 'border-primary/40 bg-primary text-primary-foreground shadow-glow'
                    : 'border-border bg-card',
                )}
              >
                <div>
                  {promo.badge && (
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
                        promo.highlight
                          ? 'bg-primary-foreground/15 text-primary-foreground'
                          : 'bg-secondary text-primary',
                      )}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      {promo.badge}
                    </span>
                  )}
                  <h3 className="mt-6 font-serif text-3xl leading-tight">
                    {promo.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 text-pretty leading-relaxed',
                      promo.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {promo.description}
                  </p>
                </div>
                <a
                  href="#reservation"
                  className={cn(
                    'inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105',
                    promo.highlight
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-primary text-primary-foreground',
                  )}
                >
                  J&apos;en profite
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

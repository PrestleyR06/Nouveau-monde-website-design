'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/animations/reveal'

export function IntroStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="histoire" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <motion.div style={{ y }} className="absolute inset-[-8%]">
              <Image
                src="/images/bartender-cocktails.png"
                alt="Bartender présentant des cocktails colorés et raffinés au Nouveau Monde"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Notre histoire
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Une maison où chaque détail{' '}
              <span className="italic text-gradient-gold">raconte une histoire</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Né d&apos;une vision audacieuse à Douala, Nouveau Monde réunit la
              haute gastronomie et l&apos;art du divertissement sous un même
              toit. Notre chef sublime les produits locaux d&apos;exception avec
              une précision digne des plus grandes tables.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { t: 'Cuisine d’auteur', d: 'Produits frais, créativité sans compromis.' },
                { t: 'Service d’exception', d: 'Une hospitalité chaleureuse et attentive.' },
                { t: 'Lounge & jeux', d: 'Billard, baby-foot et mini-golf premium.' },
                { t: 'Soirées mémorables', d: 'Anniversaires, événements et afterworks.' },
              ].map((f) => (
                <div key={f.t} className="border-l border-primary/40 pl-4">
                  <h3 className="font-serif text-lg">{f.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { games } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'

export function Gaming() {
  return (
    <section id="jeux" className="relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Espace jeux
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Le divertissement, <span className="italic text-gradient-gold">élevé au rang d&apos;art</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Prolongez la soirée dans notre lounge de jeux haut de gamme.
              Billard, baby-foot et mini-golf indoor pour des moments inoubliables
              entre amis, en famille ou en équipe.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {games.map((game, i) => (
            <Reveal key={game.id} delay={i * 0.1}>
              <motion.article
                whileHover="hover"
                className="group relative h-[26rem] overflow-hidden rounded-xl border border-border"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={game.image || '/placeholder.svg'}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl">{game.name}</h3>
                    {game.pricePerHour && (
                      <span className="rounded-full border border-primary/40 bg-background/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                        {game.pricePerHour.toLocaleString('fr-FR')} {game.currency}/h
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {game.description}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    {game.capacity}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

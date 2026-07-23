'use client'

import { stats } from '@/lib/data'
import { Counter } from '@/components/animations/counter'
import { Reveal } from '@/components/animations/reveal'

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 gap-x-4 px-5 sm:px-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-10">
        {stats.map((stat, i) => {
          const decimals = stat.value % 1 !== 0 ? 1 : 0
          return (
            <Reveal key={stat.id} delay={i * 0.08} className="text-center">
              <p className="font-serif text-5xl font-medium text-gradient-gold sm:text-6xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={decimals}
                />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

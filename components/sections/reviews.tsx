'use client'

import { Star, Quote } from 'lucide-react'
import { reviews } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'

export function Reviews() {
  return (
    <section id="avis" className="relative bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ils nous adorent
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              La voix de nos <span className="italic text-gradient-gold">convives</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-primary/50" />
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
                  &ldquo;{review.content}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg text-primary">
                    {review.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-medium">{review.author}</span>
                    {review.role && (
                      <span className="block text-sm text-muted-foreground">
                        {review.role}
                      </span>
                    )}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { promotions } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'

export function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const itemsPerPage = 3
  const totalSlides = Math.ceil(promotions.length / itemsPerPage)

  const slideVariants = {
    enter: (dir: string) => ({
      x: dir === 'right' ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      zIndex: 0,
      x: dir === 'right' ? -1000 : 1000,
      opacity: 0,
    }),
  }

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5500)
    return () => clearInterval(timer)
  }, [isAutoPlay, totalSlides])

  const handlePrev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const visiblePromos = promotions.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

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

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {visiblePromos.map((promo, i) => (
                <motion.div
                  key={promo.id}
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
                    href="https://wa.me/237689812704"
                    target="_blank"
                    rel="noopener noreferrer"
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
              ))}
            </motion.div>
          </AnimatePresence>

          {totalSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-border hover:border-primary/50 transition-colors lg:flex hidden"
                aria-label="Slide précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-border hover:border-primary/50 transition-colors lg:flex hidden"
                aria-label="Slide suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

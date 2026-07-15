'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { experienceSlides } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'

export function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides = experienceSlides
  const totalSlides = slides.length

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 1500)
    return () => clearInterval(timer)
  }, [isAutoPlay, totalSlides])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrev()
  }

  const currentSlide = slides[currentIndex]

  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Nouveau Monde Experience
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Vivez l&apos;expérience <span className="italic text-gradient-gold">Nouveau Monde</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Every visit is more than just a meal. Discover a place where exceptional cuisine, entertainment and warm Cameroonian hospitality come together to create unforgettable moments.
            </p>
          </Reveal>
        </div>

        {/* Premium Cinematic Slideshow */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background shadow-2xl"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="relative"
            >
              {/* Background Image with Zoom */}
              <div className="relative aspect-[16/9] overflow-hidden bg-background">
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.05 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-8 sm:p-12 lg:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-2xl"
                  >
                    <h3 className="font-serif text-3xl font-medium sm:text-4xl">
                      {currentSlide.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-foreground/90 sm:text-base"
                    >
                      {currentSlide.description}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Hidden on Mobile */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 hidden rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/20 sm:left-6 md:block"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 hidden rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/20 sm:right-6 md:block"
            aria-label="Slide suivant"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'h-2 w-8 bg-primary'
                    : 'h-2 w-2 bg-white/50 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Slide Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          {currentIndex + 1} / {totalSlides}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { signatureItems } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'
import type { MenuItem } from '@/types'

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group flex flex-col gap-4 rounded-lg border border-primary/20 bg-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-background/60"
      >
        {item.image && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-md">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-lg font-medium text-foreground">
            {item.name}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {item.description}
          </p>
        </div>
      </motion.article>
    </Reveal>
  )
}

function MenuCategory({
  title,
  items,
  categoryId,
  startIndex,
}: {
  title: string
  items: MenuItem[]
  categoryId: string
  startIndex: number
}) {
  if (items.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <div className="border-b border-primary/30 pb-3">
        <h3 className="text-xl font-semibold tracking-wide text-primary uppercase">
          {title}
        </h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={startIndex + i} />
        ))}
      </div>
    </motion.div>
  )
}

export function SignatureMenu() {
  const categories = [
    { id: 'grillades', label: 'Grillades', icon: '🔥' },
    { id: 'plats', label: 'Plats Cuisinés', icon: '🍽' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' },
    { id: 'cocktails', label: 'Cocktails & Drinks', icon: '🍹' },
  ]

  return (
    <section id="menu" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Notre Menu
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Délices <span className="italic text-gradient-gold">Nouveau Monde</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Découvrez notre sélection curatée de plats signature, élaborée par notre chef pour offrir une expérience gastronomique inoubliable.
            </p>
          </Reveal>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const categoryItems = signatureItems.filter(
              (item) => item.categoryId === category.id
            )
            return (
              <MenuCategory
                key={category.id}
                title={category.label}
                items={categoryItems}
                categoryId={category.id}
                startIndex={catIndex * 3}
              />
            )
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.3} className="mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center justify-center gap-4 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/5 to-primary/0 p-8 text-center sm:p-12"
          >
            <p className="text-sm text-muted-foreground">
              Intéressé par le menu complet ?
            </p>
            <a
              href="https://wa.me/237689812704"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Voir la carte complète
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

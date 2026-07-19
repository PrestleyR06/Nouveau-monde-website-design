'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { restaurantMenuData } from '@/lib/data'
import { Reveal } from '@/components/animations/reveal'

interface MenuCategory {
  id: string
  name: string
  dishes: Array<{
    name: string
    price: string
    description: string
  }>
}

interface ScrollPositions {
  [key: string]: number
}

function MenuDish({
  dish,
  index,
}: {
  dish: MenuCategory['dishes'][0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-50px' }}
      className="space-y-1 border-b border-primary/20 pb-4 last:border-b-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-foreground leading-tight">
            {dish.name}
          </h4>
          {dish.description && (
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>
        <span className="text-sm font-medium text-primary whitespace-nowrap ml-4">
          {dish.price}
        </span>
      </div>
    </motion.div>
  )
}

function MenuCategorySection({
  category,
  isActive,
  categoryIndex,
}: {
  category: MenuCategory
  isActive: boolean
  categoryIndex: number
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      id={`category-${category.id}`}
      className="space-y-6 scroll-mt-24"
    >
      <div>
        <h3 className="text-lg font-semibold tracking-wide text-primary uppercase">
          {category.name}
        </h3>
        <div className="h-px bg-gradient-to-r from-primary to-transparent mt-2" />
      </div>
      <div className="space-y-4">
        {category.dishes.map((dish, i) => (
          <MenuDish key={`${category.id}-${i}`} dish={dish} index={i} />
        ))}
      </div>
    </motion.section>
  )
}

function CategoryNavigation({
  categories,
  activeCategory,
  onCategoryClick,
}: {
  categories: MenuCategory[]
  activeCategory: string | null
  onCategoryClick: (categoryId: string) => void
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm py-6 mb-12"
    >
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center text-primary text-xs"
            aria-label="Scroll left"
          >
            ←
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="overflow-x-auto scrollbar-hide px-8"
        >
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center text-primary text-xs"
            aria-label="Scroll right"
          >
            →
          </button>
        )}
      </div>
    </motion.div>
  )
}

function ReturnButton() {
  const router = useRouter()

  const handleReturnClick = () => {
    // Store flag to scroll to menu section when returning
    sessionStorage.setItem('scrollToMenu', 'true')
    router.push('/')
  }

  return (
    <motion.button
      onClick={handleReturnClick}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary bg-transparent text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
      aria-label="Return to homepage"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      <span className="text-sm font-medium">Retour à l'accueil</span>
    </motion.button>
  )
}

export function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categoriesRef = useRef<(HTMLElement | null)[]>([])

  const categories = restaurantMenuData.categories as MenuCategory[]

  useEffect(() => {
    if (!activeCategory && categories.length > 0) {
      setActiveCategory(categories[0].id)
    }
  }, [activeCategory, categories])

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(`category-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative bg-background">
      {/* Header */}
      <div className="relative py-16 sm:py-24 border-b border-primary/20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          {/* Return Button */}
          <Reveal delay={-0.1}>
            <div className="mb-8">
              <ReturnButton />
            </div>
          </Reveal>

          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Carte Complète
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Menu <span className="italic text-gradient-gold">Nouveau Monde</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground max-w-2xl">
              Découvrez notre offre gastronomique complète, élaborée par nos chefs pour 
              satisfaire tous les palais et toutes les occasions.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-12 sm:py-16">
        {/* Category Navigation */}
        {categories.length > 0 && (
          <CategoryNavigation
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        )}

        {/* Menu Categories */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {categories.map((category, index) => (
              <MenuCategorySection
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                categoryIndex={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-primary/20 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Tous nos plats sont servis avec un accompagnement.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-4">
            Pour des questions concernant les allergènes ou les options végétariennes,
            <br />
            veuillez contacter notre équipe.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

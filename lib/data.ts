import type {
  Restaurant,
  MenuItem,
  GameActivity,
  GalleryImage,
  Promotion,
  Review,
  Statistic,
} from '@/types'

export const restaurant: Restaurant = {
  id: 'nouveau-monde',
  name: 'Nouveau Monde',
  tagline: 'Gastronomie & Divertissement de prestige',
  description:
    "Une nouvelle ère de l'art de recevoir au Cameroun. Cuisine raffinée, lounge élégant et espace de jeux d'exception.",
  city: 'Douala',
  country: 'Cameroon',
  address: 'Carrefour Ancienne Mairie Bonamoussadi, Douala, Cameroon',
  phone: '+237 6 89 81 27 04',
  email: 'contact@nouveaumonde.cm',
  rating: 4.9,
  reviewsCount: 1280,
  openingHours: [
    { day: 'Monday', open: '12:00', close: '23:00' },
    { day: 'Tuesday', open: '12:00', close: '23:00' },
    { day: 'Wednesday', open: '12:00', close: '23:00' },
    { day: 'Thursday', open: '12:00', close: '02:00' },
    { day: 'Friday', open: '12:00', close: '02:00' },
    { day: 'Saturday', open: '12:00', close: '02:00' },
    { day: 'Sunday', open: '12:00', close: '02:00' },
  ],
  social: {
    instagram: '#',
    tiktok: '#',
    facebook: '#',
    whatsapp: 'https://wa.me/237689812704',
  },
}

export const signatureItems: MenuItem[] = [
  // Grillades
  {
    id: 'm1',
    categoryId: 'grillades',
    name: 'Brochettes de bœuf grillées avec frites',
    description: 'Bœuf grillé savoureux accompagné de frites croustillantes et sauces maison.',
    price: 0,
    currency: 'FCFA',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brochettes%20de%20b%C5%93uf%20grill%C3%A9es%20avec%20frites-TvpcG5MykGHG6BwNAJcNcid3Hft0ny.png',
    signature: true,
    tags: ['Grillades'],
  },
  {
    id: 'm3',
    categoryId: 'plats',
    name: 'Wrap grillé au bœuf et fromage',
    description: 'Tortilla grillée garnie de bœuf tendre et fromage fondant.',
    price: 0,
    currency: 'FCFA',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wrap%20grill%C3%A9%20au%20b%C5%93uf%20et%20fromage-AYvY1p954s6Fpw0CAImf73qNCcal0C.png',
    tags: ['Plats'],
  },
  // Desserts
  {
    id: 'm2',
    categoryId: 'desserts',
    name: 'Profiteroles au chocolat',
    description: 'Pâte à choux délicate, crème onctueuse et chocolat noir gourmand.',
    price: 0,
    currency: 'FCFA',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profiteroles%20au%20chocolat-lZv0YoUu5Da3G0rUAKYDshiF2L3mxm.png',
    signature: true,
    tags: ['Desserts'],
  },
  // Cocktails
  {
    id: 'm4',
    categoryId: 'cocktails',
    name: 'Cocktail Tropical Sunrise',
    description: 'Mélange tropical vibrant aux agrumes avec finition coucher de soleil.',
    price: 0,
    currency: 'FCFA',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cocktail%20Tropical%20Sunrise-mofhA4dOSvhM5zcrF9TB2KwvxD44Zi.png',
    tags: ['Cocktails'],
  },
]

export const games: GameActivity[] = [
  {
    id: 'g1',
    name: 'Billard',
    description:
      'Tables de billard professionnelles dans une ambiance feutrée et chaleureuse.',
    image: '/images/billiards.png',
    pricePerHour: 3000,
    currency: 'FCFA',
    capacity: '2 à 6 joueurs',
  },
  {
    id: 'g2',
    name: 'Baby-foot',
    description:
      'Affrontez vos amis sur nos baby-foots haut de gamme entre deux plats.',
    image: '/images/babyfoot.png',
    pricePerHour: 2000,
    currency: 'FCFA',
    capacity: '2 à 4 joueurs',
  },
  {
    id: 'g3',
    name: 'Mini-Golf',
    description:
      'Un parcours de mini-golf indoor unique, ludique et spectaculaire.',
    image: '/images/minigolf.png',
    pricePerHour: 4000,
    currency: 'FCFA',
    capacity: 'Familles & groupes',
  },
]

export const gallery: GalleryImage[] = [
  { id: 'ph1', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2014%2C%202026%2C%2002_53_13%20PM-eZ9Wbw7TbX5qhGHs5mYudLMmgviLQb.png', alt: 'Devanture élégante du Nouveau Monde', span: 'wide' },
  { id: 'ph2', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2014%2C%202026%2C%2002_55_39%20PM-bjepCYwq36xnvZEH8VGOWjkVN5aN49.png', alt: 'Lounge moderne avec ambiance chaleureuse', span: 'tall' },
  { id: 'ph3', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2015%2C%202026%2C%2011_49_14%20AM-5rDB8XgnEWkM9Id9rQiYegn6G1IBGI.png', alt: 'Cocktail signature élégant', span: 'normal' },
  { id: 'ph4', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2014%2C%202026%2C%2002_58_09%20PM-t6qnf7Z3HCZGgcRgNvpfSPNuogPJul.png', alt: 'Communauté Nouveau Monde - nos clients', span: 'normal' },
]

export const promotions: Promotion[] = [
  {
    id: 'p1',
    title: 'Happy Hour Doré',
    description: 'Du lundi au jeudi, 18h–20h : -30% sur la carte des cocktails.',
  },
  {
    id: 'p2',
    title: 'Dîner & Jeux',
    description: 'Un menu deux services offert pour 2h de billard réservées.',
  },
  {
    id: 'p3',
    title: 'Brunch du Dimanche',
    description: 'Buffet gastronomique à volonté et animations pour la famille.',
  },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Aïcha N.',
    role: 'Cliente fidèle',
    rating: 5,
    content:
      "L'endroit le plus élégant de Douala. Le service est impeccable et le filet du chef est inoubliable.",
  },
  {
    id: 'r2',
    author: 'Hervé K.',
    role: 'Entrepreneur',
    rating: 5,
    content:
      "Parfait pour mes dîners d'affaires. Cadre raffiné, cuisine d'exception et un espace de jeux unique.",
  },
  {
    id: 'r3',
    author: 'Laura & Steve',
    role: 'Couple',
    rating: 5,
    content:
      'Nous avons fêté notre anniversaire ici. Une soirée magique, digne des plus grandes tables.',
  },
]

export const stats: Statistic[] = [
  { id: 's1', label: 'Clients ravis', value: 25000, suffix: '+' },
  { id: 's2', label: 'Note moyenne', value: 4.9, suffix: '/5' },
  { id: 's3', label: 'Plats signatures', value: 15, suffix: '' },
  { id: 's4', label: 'Années d\'excellence', value: 2, suffix: '' },
]

export const navLinks = [
  { label: 'Menu', href: '#menu' },
]

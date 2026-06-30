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
  country: 'Cameroun',
  address: 'Boulevard de la Liberté, Akwa, Douala',
  phone: '+237 6 90 00 00 00',
  email: 'contact@nouveaumonde.cm',
  rating: 4.9,
  reviewsCount: 1280,
  openingHours: [
    { day: 'Lundi', open: '11:00', close: '23:00' },
    { day: 'Mardi', open: '11:00', close: '23:00' },
    { day: 'Mercredi', open: '11:00', close: '23:00' },
    { day: 'Jeudi', open: '11:00', close: '00:00' },
    { day: 'Vendredi', open: '11:00', close: '02:00' },
    { day: 'Samedi', open: '11:00', close: '02:00' },
    { day: 'Dimanche', open: '12:00', close: '23:00' },
  ],
  social: {
    instagram: '#',
    tiktok: '#',
    facebook: '#',
    whatsapp: '#',
  },
}

export const signatureItems: MenuItem[] = [
  {
    id: 'm1',
    categoryId: 'plats',
    name: 'Filet Royal du Chef',
    description:
      'Filet de bœuf maturé, jus corsé au poivre de Penja, légumes glacés.',
    price: 12500,
    currency: 'FCFA',
    image: '/images/dish-signature.png',
    signature: true,
    tags: ['Signature', 'Premium'],
  },
  {
    id: 'm2',
    categoryId: 'mer',
    name: 'Trésor de la Mer',
    description:
      'Gambas et homard grillés, beurre citronné aux herbes fraîches.',
    price: 15000,
    currency: 'FCFA',
    image: '/images/dish-seafood.png',
    signature: true,
    tags: ['Fruits de mer'],
  },
  {
    id: 'm3',
    categoryId: 'bar',
    name: 'Signature Doré',
    description:
      'Cocktail maison aux notes d’agrumes, miel et épices, finition or.',
    price: 6500,
    currency: 'FCFA',
    image: '/images/cocktail.png',
    tags: ['Mixologie'],
  },
  {
    id: 'm4',
    categoryId: 'desserts',
    name: 'Fondant Précieux',
    description:
      'Cœur de chocolat noir intense, feuille d’or et coulis de fruits rouges.',
    price: 5500,
    currency: 'FCFA',
    image: '/images/dessert.png',
    tags: ['Dessert'],
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
  { id: 'ph1', src: '/images/atmosphere.png', alt: 'Ambiance conviviale au Nouveau Monde', span: 'wide' },
  { id: 'ph2', src: '/images/chef.png', alt: 'Le chef dresse un plat signature', span: 'tall' },
  { id: 'ph3', src: '/images/gallery-bar.png', alt: 'Le bar illuminé du lounge', span: 'normal' },
  { id: 'ph4', src: '/images/dish-seafood.png', alt: 'Plat de fruits de mer', span: 'normal' },
  { id: 'ph5', src: '/images/billiards.png', alt: 'Espace billard premium', span: 'wide' },
  { id: 'ph6', src: '/images/cocktail.png', alt: 'Cocktail signature', span: 'tall' },
]

export const promotions: Promotion[] = [
  {
    id: 'p1',
    title: 'Happy Hour Doré',
    description: 'Du lundi au jeudi, 18h–20h : -30% sur la carte des cocktails.',
    badge: 'Tous les soirs',
    highlight: true,
  },
  {
    id: 'p2',
    title: 'Dîner & Jeux',
    description: 'Un menu deux services offert pour 2h de billard réservées.',
    badge: 'Pack duo',
  },
  {
    id: 'p3',
    title: 'Brunch du Dimanche',
    description: 'Buffet gastronomique à volonté et animations pour la famille.',
    badge: 'Week-end',
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
  { id: 's3', label: 'Plats signatures', value: 60, suffix: '+' },
  { id: 's4', label: 'Années d’excellence', value: 8, suffix: '' },
]

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Histoire', href: '#histoire' },
  { label: 'Menu', href: '#menu' },
  { label: 'Jeux', href: '#jeux' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
]

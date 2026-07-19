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

export const experienceSlides = [
  {
    id: 'exp1',
    title: 'Gastronomie Camerounaise',
    description: 'Découvrez nos plats traditionnels camerounais préparés avec soin: Ndolé, Brochettes savoureux, et spécialités locales authentiques servies avec finesse.',
    image: '/images/experience-dining.png',
  },
  {
    id: 'exp2',
    title: 'Cocktails & Détente',
    description: 'Savourez nos cocktails artisanaux dans une ambiance élégante, parfaits pour les soirées relaxantes et conversations inoubliables.',
    image: '/images/experience-cocktails.png',
  },
  {
    id: 'exp3',
    title: 'Jeux & Divertissement',
    description: 'Partagez des moments mémorables entre amis et famille dans nos espaces de divertissement premium conçus pour le plaisir et la relaxation.',
    image: '/images/experience-games.png',
  },
  {
    id: 'exp4',
    title: 'Hospitalité Camerounaise',
    description: 'Vivez l\'hospitalité camerounaise authentique dans une atmosphère accueillante où chaque invité se sent comme chez lui.',
    image: '/images/experience-hospitality.png',
  },
]

export const promotions: Promotion[] = []

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

export const restaurantMenuData = {
  familialMenus: [
    {
      id: 'fm1',
      servings: '6 PERSONNES',
      price: '32 000 FCFA',
      items: [
        'Deux pizzas',
        'Un poulet entier pané ou grillé',
        '6 saucisses',
        '3 boissons (coca, tonic ou eau minérale)'
      ]
    },
    {
      id: 'fm2',
      servings: '12 PERSONNES',
      price: '64 000 FCFA',
      items: [
        '4 pizzas',
        '2 poulets entiers grillés ou panés',
        '12 saucisses',
        '6 boissons (coca, tonic ou eau minérale)'
      ]
    },
    {
      id: 'fm3',
      servings: '18 PERSONNES',
      price: '96 000 FCFA',
      items: [
        '6 pizzas',
        '3 poulets entiers grillés ou panés',
        '18 saucisses',
        '9 boissons (coca, tonic ou eau minérale)'
      ]
    }
  ],
  categories: [
    {
      id: 'cat1',
      name: 'PIZZAS',
      dishes: [
        { name: 'Campione', price: '5 000 FCFA', description: 'Sauce tomate, mozza, viande hachée, oignons' },
        { name: 'Thon', price: '5 000 FCFA', description: 'Sauce tomate, mozza, miettes de thon, rondelles de tomate, olives' },
        { name: 'Barbecue', price: '5 000 FCFA', description: 'Sauce tomate, mozza, blanc de poulet, oignons, sauce BBQ' },
        { name: 'Reine', price: '5 000 FCFA', description: 'Sauce tomate, mozza, jambon, champignons' },
        { name: 'Orientale', price: '5 000 FCFA', description: 'Sauce tomate, mozza, saucisse, poivrons' },
        { name: 'Sensation', price: '6 000 FCFA', description: 'Crème fraîche, poulet, champignons, pommes de terre, origan' },
        { name: '4 Fromages', price: '6 500 FCFA', description: 'Sauce tomate, mozza, chèvre, gouda, emmental' },
        { name: 'Firmament', price: '8 500 FCFA', description: 'Sauce tomate, mozza, jambon blanc, jambon serrano, tomates cerises, salade' }
      ]
    },
    {
      id: 'cat2',
      name: 'POKE BOWL',
      dishes: [
        { name: 'Poulet', price: '4 000 FCFA', description: 'Riz, blanc de poulet pané, avocat, carottes et choux marinés, ananas rôti, sauce soja' },
        { name: 'Crevettes', price: '4 500 FCFA', description: 'Riz, crevettes sautées, avocat, carottes et choux marinés, concombre, ananas rôti, sauce soja' }
      ]
    },
    {
      id: 'cat3',
      name: 'BURGERS',
      dishes: [
        { name: 'Fish burger', price: '3 000 FCFA', description: '' },
        { name: 'Cheese burger', price: '3 000 FCFA', description: '' },
        { name: 'Double cheese burger', price: '4 000 FCFA', description: '' },
        { name: 'Signature', price: '3 700 FCFA', description: 'Steak, pommes de terre, cheddar, avocat, tomates, oignons confits' },
        { name: 'Spectaculos', price: '5 000 FCFA', description: 'Double steak, double cheddar, cornichons, lard grillé' }
      ]
    },
    {
      id: 'cat4',
      name: 'TACOS',
      dishes: [
        { name: '2 viandes (L)', price: '5 000 FCFA', description: '' },
        { name: '3 viandes (XL)', price: '6 500 FCFA', description: '' }
      ]
    },
    {
      id: 'cat5',
      name: 'PLATS CUISINÉS',
      dishes: [
        { name: 'Poulet Yassa', price: '4 000 FCFA', description: '' },
        { name: 'Ndolè V/C', price: '4 000 / 5 000 FCFA', description: '' },
        { name: 'Ndolè royal', price: '7 000 FCFA', description: '' },
        { name: '1/2 Poulet DG', price: '6 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat6',
      name: 'ACCOMPAGNEMENTS',
      dishes: [
        { name: 'Carottes râpées', price: '1 000 FCFA', description: '' },
        { name: 'Choux râpés', price: '1 000 FCFA', description: '' },
        { name: 'Haricots verts', price: '1 000 FCFA', description: '' },
        { name: 'Frites de pommes', price: '1 000 FCFA', description: '' },
        { name: 'Frites de plantain', price: '1 000 FCFA', description: '' },
        { name: 'Riz basmati', price: '1 000 FCFA', description: '' },
        { name: 'Frites signature', price: '2 500 FCFA', description: 'Cheddar fondu, bacon' }
      ]
    },
    {
      id: 'cat7',
      name: 'GRILLADES',
      dishes: [
        { name: 'Pièce du boucher', price: '5 000 FCFA', description: '' },
        { name: 'Filet de poisson', price: '5 000 FCFA', description: '' },
        { name: 'Côte de porc', price: '4 000 FCFA', description: '' },
        { name: 'Steak haché', price: '4 000 FCFA', description: '' },
        { name: '1/4 de poulet', price: '3 000 FCFA', description: '' },
        { name: 'Saucisses', price: '3 000 FCFA', description: '' },
        { name: 'Poulet entier (3 pers.)', price: '11 000 FCFA', description: '' },
        { name: 'Gambas', price: '14 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat8',
      name: 'POULET PANÉ',
      dishes: [
        { name: '3 morceaux', price: '3 000 FCFA', description: '' },
        { name: '4 morceaux', price: '3 900 FCFA', description: '' },
        { name: '8 morceaux (2 pers.)', price: '7 800 FCFA', description: '' },
        { name: 'Entier (3 pers.)', price: '11 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat9',
      name: 'PÂTES',
      dishes: [
        { name: 'Bolognaise', price: '3 500 FCFA', description: '' },
        { name: 'Carbonara', price: '4 000 FCFA', description: '' },
        { name: 'Poulet champignons', price: '4 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat10',
      name: 'SALADES',
      dishes: [
        { name: 'César', price: '4 000 FCFA', description: '' },
        { name: 'Chèvre pané', price: '4 000 FCFA', description: '' },
        { name: 'Composée', price: '3 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat11',
      name: 'SHAKES',
      dishes: [
        { name: 'Ananas', price: '3 500 FCFA', description: '' },
        { name: 'Mangue', price: '3 500 FCFA', description: '' },
        { name: 'Chocolat', price: '3 500 FCFA', description: '' },
        { name: 'Spéculos', price: '3 500 FCFA', description: '' },
        { name: 'Oréo', price: '3 500 FCFA', description: '' },
        { name: 'Banane-chocolat', price: '3 500 FCFA', description: '' },
        { name: 'Kitkat', price: '3 500 FCFA', description: '' },
        { name: 'Kinder', price: '4 000 FCFA', description: '' },
        { name: 'Pistache', price: '4 500 FCFA', description: '' },
        { name: 'Royal', price: '5 500 FCFA', description: '' }
      ]
    },
    {
      id: 'cat12',
      name: 'DESSERTS',
      dishes: [
        { name: 'Boule de glace', price: '1 000 FCFA', description: '' },
        { name: 'Saveur pistache', price: '1 500 FCFA', description: '' },
        { name: 'Salade de fruits', price: '2 500 FCFA', description: '' },
        { name: 'Dame blanche', price: '3 500 FCFA', description: '' },
        { name: 'Profiteroles', price: '3 500 FCFA', description: '' },
        { name: 'Gaufre nutella chantilly', price: '3 500 FCFA', description: '' }
      ]
    },
    {
      id: 'cat13',
      name: 'COCKTAILS ET AUTRES BOISSONS',
      dishes: [
        { name: 'Cocktail maison', price: '3 500 FCFA', description: '' },
        { name: 'Smoothie carafe', price: '5 000 FCFA', description: '' },
        { name: 'Conso whisky', price: '3 500 FCFA', description: '' },
        { name: 'Verre de vin', price: '3 000 FCFA', description: '' },
        { name: 'Bière', price: '1 500 FCFA', description: '' },
        { name: 'Shot', price: '2 000 FCFA', description: '' },
        { name: 'Coca', price: '1 500 FCFA', description: '' },
        { name: 'Eau minérale / gazeuse', price: '1 000 / 2 000 FCFA', description: '' },
        { name: 'Tonic', price: '1 000 FCFA', description: '' },
        { name: 'Café - Thé', price: '1 500 FCFA', description: '' }
      ]
    },
    {
      id: 'cat14',
      name: 'VINS BLANCS',
      dishes: [
        { name: 'Tour de cantelou', price: '10 000 FCFA', description: '' },
        { name: 'Bordeaux', price: '20 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat15',
      name: 'VINS ROUGES',
      dishes: [
        { name: 'Tour de cantelou', price: '10 000 FCFA', description: '' },
        { name: 'Bordeaux', price: '20 000 FCFA', description: '' },
        { name: 'Medoc cru', price: '25 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat16',
      name: 'ROSÉS',
      dishes: [
        { name: 'Bordeaux', price: '20 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat17',
      name: 'VINS MOUSSEUX',
      dishes: [
        { name: 'Moscato', price: '20 000 FCFA', description: '' },
        { name: 'YBY', price: '25 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat18',
      name: 'WHISKY / VODKA',
      dishes: [
        { name: 'Jack Daniel', price: '40 000 FCFA', description: '' },
        { name: 'Monkey Shoulder', price: '45 000 FCFA', description: '' },
        { name: 'Chivas 12', price: '40 000 FCFA', description: '' },
        { name: 'Black', price: '40 000 FCFA', description: '' },
        { name: 'Cardhu', price: '50 000 FCFA', description: '' },
        { name: 'Double Black', price: '80 000 FCFA', description: '' },
        { name: 'Chivas 18', price: '85 000 FCFA', description: '' },
        { name: 'Nikka', price: '90 000 FCFA', description: '' },
        { name: 'Ciroc', price: '50 000 FCFA', description: '' },
        { name: 'Belvedere', price: '60 000 FCFA', description: '' },
        { name: 'Absolut', price: '35 000 FCFA', description: '' },
        { name: 'Martini', price: '25 000 FCFA', description: '' },
        { name: 'Baileys', price: '25 000 FCFA', description: '' }
      ]
    },
    {
      id: 'cat19',
      name: 'CHAMPAGNES',
      dishes: [
        { name: 'Moët', price: '60 000 FCFA', description: '' },
        { name: 'Veuve Clicquot', price: '80 000 FCFA', description: '' },
        { name: 'Ruinart Brut', price: '80 000 FCFA', description: '' },
        { name: 'Ruinart Blanc', price: '120 000 FCFA', description: '' }
      ]
    }
  ]
}

export const navLinks = [
  { label: 'Menu', href: '/menu' },
]

/**
 * Domain interfaces for Nouveau Monde.
 * These describe the data shapes the front-end expects so the project
 * is ready for future backend / API integration. No APIs are implemented here.
 */

export interface OpeningHours {
  day: string
  open: string
  close: string
  closed?: boolean
}

export interface SocialLinks {
  instagram?: string
  tiktok?: string
  facebook?: string
  whatsapp?: string
  x?: string
}

export interface Restaurant {
  id: string
  name: string
  tagline: string
  description: string
  city: string
  country: string
  address: string
  phone: string
  email: string
  rating: number
  reviewsCount: number
  openingHours: OpeningHours[]
  social: SocialLinks
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
}

export interface MenuItem {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  currency: string
  image: string
  tags?: string[]
  signature?: boolean
  spicy?: boolean
  vegetarian?: boolean
}

export interface GameActivity {
  id: string
  name: string
  description: string
  image: string
  pricePerHour?: number
  currency?: string
  capacity?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'normal'
}

export interface Promotion {
  id: string
  title: string
  description: string
  badge?: string
  validUntil?: string
  highlight?: boolean
}

export interface Review {
  id: string
  author: string
  role?: string
  rating: number
  content: string
  avatar?: string
}

export interface Statistic {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface Reservation {
  id?: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  occasion?: string
  notes?: string
}

export interface OrderItem {
  menuItemId: string
  quantity: number
}

export interface Order {
  id?: string
  items: OrderItem[]
  total: number
  currency: string
  customerId?: string
  createdAt?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  image?: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
}

export interface Notification {
  id: string
  type: 'success' | 'warning' | 'error' | 'info'
  message: string
  read?: boolean
}

export interface Settings {
  theme: 'dark' | 'light'
  language: 'fr' | 'en'
  currency: string
}

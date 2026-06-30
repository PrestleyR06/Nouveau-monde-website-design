import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Nouveau Monde — Restaurant & Lounge de prestige',
  description:
    "Nouveau Monde, l'expérience culinaire et de divertissement la plus raffinée du Cameroun. Gastronomie premium, billard, baby-foot, mini-golf et soirées inoubliables.",
  generator: 'v0.app',
  keywords: [
    'restaurant Cameroun',
    'restaurant de luxe',
    'Nouveau Monde',
    'réservation restaurant',
    'billard',
    'mini-golf',
    'gastronomie',
  ],
  openGraph: {
    title: 'Nouveau Monde — Restaurant & Lounge de prestige',
    description:
      "L'expérience culinaire et de divertissement la plus raffinée du Cameroun.",
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#070707',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} dark`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

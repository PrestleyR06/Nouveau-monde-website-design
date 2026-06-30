import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Globe, Music, Send, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/animations/reveal"

const navLinks = [
  { label: "L'Expérience", href: "#histoire" },
  { label: "Le Menu", href: "#menu" },
  { label: "Divertissement", href: "#jeux" },
  { label: "Galerie", href: "#galerie" },
  { label: "Réserver", href: "#reservation" },
]

const hours = [
  { day: "Lundi — Jeudi", time: "11h00 — 23h00" },
  { day: "Vendredi — Samedi", time: "11h00 — 02h00" },
  { day: "Dimanche", time: "12h00 — 22h00" },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="#" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Nouveau<span className="text-primary">.</span>Monde
              </Link>
              <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
                Une destination où la haute gastronomie rencontre le divertissement raffiné. Bienvenue dans un nouveau
                monde.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Music className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Navigation</h3>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</h3>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Boulevard de la Liberté, Akwa, Douala, Cameroun</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+237600000000" className="transition-colors hover:text-foreground">
                    +237 6 00 00 00 00
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:contact@nouveaumonde.cm" className="transition-colors hover:text-foreground">
                    contact@nouveaumonde.cm
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Horaires</h3>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="flex flex-col">
                      <span className="text-foreground">{h.day}</span>
                      <span className="text-sm">{h.time}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Nouveau Monde. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

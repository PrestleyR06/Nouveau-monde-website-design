import { SiteNav } from "@/components/site-nav"
import { RestaurantMenu } from "@/components/pages/restaurant-menu"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Menu - Nouveau Monde",
  description: "Découvrez le menu complet du restaurant Nouveau Monde à Douala",
}

export default function MenuPage() {
  return (
    <>
      <SiteNav />
      <main>
        <RestaurantMenu />
      </main>
      <SiteFooter />
    </>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedSection } from "@/components/featured-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import {
  HERO_QUERY,
  SERVICES_QUERY,
  SETTINGS_QUERY,
  CATEGORIES_QUERY,
  FEATURED_QUERY,
  CONTACT_QUERY
} from "@/sanity/lib/queries"

export default async function Home() {
  const [heroData, servicesData, settingsData, categoriesData, featuredData, contactData] = await Promise.all([
    client.fetch(HERO_QUERY, {}, { cache: "no-store" }),
    client.fetch(SERVICES_QUERY, {}, { cache: "no-store" }),
    client.fetch(SETTINGS_QUERY, {}, { cache: "no-store" }),
    client.fetch(CATEGORIES_QUERY, {}, { cache: "no-store" }),
    client.fetch(FEATURED_QUERY, {}, { cache: "no-store" }),
    client.fetch(CONTACT_QUERY, {}, { cache: "no-store" }),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Header settings={settingsData} />
      <HeroSection data={heroData} services={servicesData} settings={settingsData} />
      <CategoriesSection data={categoriesData} />
      <FeaturedSection data={featuredData} settings={settingsData} />
      <ContactSection data={contactData} settings={settingsData} />
      <Footer settings={settingsData} />
    </main>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Oxanium } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

import { WhatsAppFloat } from "@/components/whatsapp-float"
import { client } from "@/sanity/lib/client"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"

const SITE_URL = "https://repuestosgermana.com"

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SETTINGS_QUERY, {}, { cache: "no-store" })

  const title = "Repuestos BMW, Mercedes-Benz, Audi y Volkswagen en Bogotá | Repuestos Germana"
  const description =
    "Compra repuestos originales y alternativos para BMW, Mercedes-Benz, Audi, Volkswagen, Porsche y Mini Cooper en Bogotá. Autopartes alemanas con garantía: pastillas de freno, amortiguadores, filtros, suspensión y más. Taller especializado en vehículos alemanes. Envío a toda Colombia."
  const logo = settings?.logo || "/images/image.png"

  return {
    title,
    description,
    keywords: [
      // Keywords primarias de marca + ciudad (alto volumen)
      "repuestos BMW Bogotá",
      "repuestos Mercedes-Benz Bogotá",
      "repuestos Audi Bogotá",
      "repuestos Volkswagen Bogotá",
      "repuestos Porsche Colombia",
      "repuestos Mini Cooper Colombia",
      // Término alternativo: "autopartes" (muy buscado)
      "autopartes alemanas Colombia",
      "autopartes BMW",
      "autopartes Mercedes-Benz",
      "autopartes Audi",
      // Condición del repuesto (intención de compra)
      "repuestos originales BMW",
      "repuestos originales Mercedes-Benz",
      "repuestos originales Audi",
      "repuestos para carros alemanes",
      // Modelos específicos (cola larga, alta intención de compra)
      "repuestos BMW Serie 3",
      "repuestos BMW Serie 5",
      "repuestos Mercedes Clase C",
      "repuestos Mercedes Clase E",
      "repuestos Audi A3",
      "repuestos Audi A4",
      "repuestos Audi Q5",
      // Partes específicas (búsquedas de alta conversión)
      "pastillas de freno BMW",
      "amortiguadores Mercedes-Benz",
      "filtros de aceite Audi",
      "suspensión Volkswagen",
      "frenos BMW Bogotá",
      "motor Mercedes-Benz repuestos",
      // Servicios + taller
      "taller BMW Bogotá",
      "taller Mercedes-Benz Bogotá",
      "taller Audi Bogotá",
      "taller vehículos alemanes Bogotá",
      "mecánica especializada carros alemanes",
      "mantenimiento BMW Colombia",
      "diagnóstico vehículos alemanes",
      // Marca del negocio
      "repuestos germana",
      "repuestos germana Bogotá",
    ].join(", "),
    alternates: {
      canonical: SITE_URL,
    },
    icons: {
      icon: logo,
      apple: logo,
    },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url: SITE_URL,
      title,
      description,
      images: [{ url: logo, width: 512, height: 512, alt: "Repuestos Germana - Repuestos para Vehículos Alemanes en Bogotá" }],
      siteName: "Repuestos Germana",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [logo],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

/** JSON-LD structured data for LocalBusiness + AutoPartsStore */
function JsonLdSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoPartsStore", "LocalBusiness"],
    name: "Repuestos Germana",
    description:
      "Compra repuestos originales y alternativos para BMW, Mercedes-Benz, Audi, Volkswagen, Porsche y Mini Cooper en Bogotá. Autopartes alemanas: pastillas de freno, amortiguadores, filtros, suspensión y más. Taller especializado con garantía.",
    url: SITE_URL,
    telephone: "+573043598195",
    email: "info@repuestosgermana.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.6097",
      longitude: "-74.0817",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    image: `${SITE_URL}/images/image.png`,
    sameAs: [],
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    brand: [
      { "@type": "Brand", name: "BMW" },
      { "@type": "Brand", name: "Mercedes-Benz" },
      { "@type": "Brand", name: "Audi" },
      { "@type": "Brand", name: "Volkswagen" },
      { "@type": "Brand", name: "Porsche" },
      { "@type": "Brand", name: "Mini Cooper" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repuestos para Vehículos Alemanes",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Repuestos BMW",
          description: "Repuestos originales y alternativos para BMW en Bogotá",
        },
        {
          "@type": "OfferCatalog",
          name: "Repuestos Mercedes-Benz",
          description: "Repuestos originales y alternativos para Mercedes-Benz en Colombia",
        },
        {
          "@type": "OfferCatalog",
          name: "Repuestos Audi",
          description: "Repuestos originales y alternativos para Audi",
        },
        {
          "@type": "OfferCatalog",
          name: "Repuestos Volkswagen",
          description: "Repuestos originales y alternativos para Volkswagen",
        },
        {
          "@type": "OfferCatalog",
          name: "Repuestos Porsche",
          description: "Repuestos originales y alternativos para Porsche",
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await client.fetch(SETTINGS_QUERY)

  return (
    <html lang="es">
      <head>
        <JsonLdSchema />
      </head>
      <body className={`${oxanium.className} antialiased`}>
        {children}
        <WhatsAppFloat settings={settings} />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17876761326"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17876761326');
          `}
        </Script>
      </body>
    </html>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Oxanium } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SETTINGS_QUERY, {}, { cache: "no-store" })

  const title = "Repuestos Germana | Especialistas en Vehículos Alemanes"
  const description = "Taller especializado y venta de repuestos originales para BMW, Mercedes Benz, Audi y Mini Cooper en Bogotá. Servicio garantizado."
  const logo = settings?.logo || "/images/image.png"

  return {
    title,
    description,
    keywords: "repuestos germana, taller bmw bogota, repuestos mercedes benz, taller audi, mantenimiento volkswagen, repuestos mini cooper, mecánica especializada, repuestos originales",
    icons: {
      icon: logo,
      apple: logo,
    },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://repuestosgermana.com",
      title,
      description,
      images: [{ url: logo }],
      siteName: "Repuestos Germana",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

import { WhatsAppFloat } from "@/components/whatsapp-float"
import { client } from "@/sanity/lib/client"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await client.fetch(SETTINGS_QUERY)

  return (
    <html lang="es">
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

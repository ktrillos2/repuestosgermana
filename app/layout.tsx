import type React from "react"
import type { Metadata } from "next"
import { Oxanium } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
})

export const metadata: Metadata = {
  title: "Repuestos Germana | Especialistas en Vehículos Alemanes",
  description:
    "Taller especializado y venta de repuestos originales para BMW, Mercedes Benz, Audi y Mini Cooper en Bogotá. Servicio garantizado.",
  keywords:
    "repuestos germana, taller bmw bogota, repuestos mercedes benz, taller audi, mantenimiento volkswagen, repuestos mini cooper, mecánica especializada, repuestos originales",
  icons: {
    icon: "/images/image.png",
    apple: "/images/image.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://repuestosgermana.com",
    title: "Repuestos Germana | Especialistas en Vehículos Alemanes",
    description: "Taller especializado y venta de repuestos originales para BMW, Mercedes Benz, Audi y Mini Cooper en Bogotá.",
    images: [{ url: "/images/image.png" }],
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
      </body>
    </html>
  )
}

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
  title: "Repuestos Germana | Taller Especializado BMW, Mercedes, Audi en Bogotá",
  description:
    "Especialistas en vehículos alemanes en Bogotá. Taller de mecánica especializada y venta de repuestos originales nuevos y usados para BMW, Mercedes Benz, Audi, Volkswagen y Mini Cooper. Diagnóstico y mantenimiento.",
  keywords:
    "repuestos germana, taller bmw bogota, repuestos mercedes benz, taller audi, mantenimiento volkswagen, repuestos mini cooper, mecánica especializada, repuestos originales, diagnóstico automotriz, taller alemanes bogota",
  icons: {
    icon: "/images/image.png",
    apple: "/images/image.png",
  },
}

import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${oxanium.className} antialiased`}>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}

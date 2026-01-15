"use client"

import { useState } from "react"
import { Phone, Menu, X, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/lib/gtag"

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
]

interface HeaderProps {
  settings?: {
    logo?: string
    headerMenu?: {
      items?: Array<{ name: string; href: string }>
    }
  }
}

export function Header({ settings }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = settings?.headerMenu?.items || [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#a0a0a0]">
              <Clock className="w-3.5 h-3.5 text-[#0066B1]" />
              <span>Lun - Vie: 8:00 - 17:00 | Sáb: 8:30 - 15:00</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#a0a0a0]">
              <MapPin className="w-3.5 h-3.5 text-[#0066B1]" />
              <span>Bogotá, Colombia</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#a0a0a0]">
            <Phone className="w-3.5 h-3.5 text-[#c41e3a]" />
            <a href="tel:+573025459865" className="hover:text-white transition-colors">
              (+57) 302 545 9865
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={settings?.logo || "/images/image.png"} alt="Repuestos Germana" className="h-10 md:h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                className="bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold px-6 py-2 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                asChild
              >
                <a href="https://wa.me/573025459865" target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, "https://wa.me/573025459865")}>
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-[#1a1a1a] pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="mt-4 w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-wider text-sm"
                asChild
              >
                <a href="https://wa.me/573025459865" target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, "https://wa.me/573025459865")}>
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

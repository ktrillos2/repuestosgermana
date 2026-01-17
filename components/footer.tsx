"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { handleWhatsAppClick } from "@/lib/gtag"

interface FooterProps {
  settings?: {
    phoneNumber?: string
    whatsappNumber?: string
    email?: string
    address?: string
    footerDescription?: string
    socials?: {
      facebook?: string
      instagram?: string
    }
  }
}

export function Footer({ settings }: FooterProps) {

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold chrome-text">REPUESTOS GERMANA</h3>
            <div className="h-1 w-20 m-stripe rounded-full" />
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              {settings?.footerDescription || "Taller automotriz especializado en vehículos alemanes. BMW, Mercedes Benz, Audi, Volkswagen y Mini Cooper."}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">Contacto</h3>
            <div className="space-y-3">
              <a
                href={`tel:+57${settings?.phoneNumber || "3025459865"}`}
                className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#0066B1] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#0066B1]" />
                (+57) {settings?.phoneNumber || "302 545 9865"}
              </a>
              <a
                href={`https://wa.me/${settings?.whatsappNumber || "573043598195"}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleWhatsAppClick(e, `https://wa.me/${settings?.whatsappNumber || "573043598195"}`)}
                className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#0066B1] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#c41e3a]" />
                (+57) {settings?.whatsappNumber || "304 359 8195"}
              </a>
              <div className="flex items-center gap-3 text-[#a0a0a0] text-sm">
                <Mail className="w-4 h-4 text-[#0066B1]" />
                {settings?.email || "info@repuestosgermana.com"}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">Horario</h3>
            <div className="space-y-2 text-[#a0a0a0] text-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#0066B1]" />
                <span>Lun - Vie: 8:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c41e3a]" />
                <span>Sábado: 8:30 - 15:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#a0a0a0]" />
                <span>Domingo: Cerrado</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">Ubicación</h3>
            <div className="flex items-start gap-3 text-[#a0a0a0] text-sm">
              <MapPin className="w-4 h-4 text-[#0066B1] mt-0.5" />
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#a0a0a0] text-sm">© 2026 Repuestos Germana. Todos los derechos reservados.</p>
          <div className="h-1 w-24 m-stripe rounded-full" />
        </div>
      </div>
    </footer>
  )
}

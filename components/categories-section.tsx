"use client"

import { Wrench, Gauge, Settings, Zap, Wind, CircleDot, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    id: 1,
    icon: Wrench,
    number: "01",
    name: "Mecánica Automotriz",
    description: "Mantenimiento preventivo y correctivo con honestidad y garantía en el servicio.",
    accent: "#0066B1",
  },
  {
    id: 2,
    icon: Settings,
    number: "02",
    name: "Repuestos Originales",
    description: "Importamos y comercializamos repuestos originales, nuevos o usados a nivel nacional.",
    accent: "#c41e3a",
  },
  {
    id: 3,
    icon: Gauge,
    number: "03",
    name: "Suspensión y Amortiguadores",
    description: "Equilibrio en las cargas de su vehículo con amortiguadores originales.",
    accent: "#c0c0c0",
  },
  {
    id: 4,
    icon: Zap,
    number: "04",
    name: "Diagnóstico Express",
    description: "Escáner, cambio de aceite, pastillas, batería o filtros. Atención rápida y efectiva.",
    accent: "#0066B1",
  },
  {
    id: 5,
    icon: Wind,
    number: "05",
    name: "Aire Acondicionado",
    description: "Mantenimiento, cambio de filtros, diagnóstico y recarga del sistema de A/C.",
    accent: "#c41e3a",
  },
  {
    id: 6,
    icon: CircleDot,
    number: "06",
    name: "Alineación y Balanceo",
    description: "Ajuste y cambio de neumáticos y rines para prolongar su vida útil.",
    accent: "#c0c0c0",
  },
]

export function CategoriesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollAnimation direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-[#0066B1]" />
                <span className="text-[#0066B1] text-sm font-semibold tracking-widest uppercase">
                  Nuestros Servicios
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Lo Que</span>
                <br />
                <span className="chrome-text">Ofrecemos</span>
              </h2>
            </div>
            <p className="text-[#a0a0a0] text-lg max-w-md leading-relaxed lg:text-right">
              Mecánica especializada para automóviles alemanes con la mejor calidad y garantía.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 100} direction="up">
              <div className="group relative bg-[#111111] border border-[#1a1a1a] rounded-sm overflow-hidden hover:border-[#262626] transition-all duration-500 cursor-pointer h-full">
                {/* Number watermark */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#1a1a1a] group-hover:text-[#262626] transition-colors">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.accent}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.accent }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0066B1] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#0066B1] font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Más Info</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: service.accent }}
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={200} direction="up">
          <div className="mt-16 bg-gradient-to-r from-[#0066B1]/10 via-[#111111] to-[#c41e3a]/10 border border-[#1a1a1a] rounded-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ¿Necesita una revisión de su vehículo?
                </h3>
                <p className="text-[#a0a0a0]">Reserve una cita para diagnóstico, reparación o mantenimiento.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#0066B1] hover:bg-[#0077cc] text-white font-bold px-8 py-6 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_30px_rgba(0,102,177,0.4)]"
                  asChild
                >
                  <a href="#contacto">Solicitar Cita</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#262626] text-white hover:bg-white hover:text-[#0a0a0a] font-bold px-8 py-6 rounded-sm uppercase tracking-wider text-sm transition-all bg-transparent"
                  asChild
                >
                  <a href="tel:+573025459865">
                    <Phone className="mr-2 w-5 h-5" />
                    Llamar Ya
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* M-stripe decoration */}
        <ScrollAnimation delay={300} direction="fade">
          <div className="mt-16 flex justify-center">
            <div className="h-1 w-48 m-stripe rounded-full" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

"use client"

import { Wrench, Gauge, Settings, Zap, Wind, CircleDot, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"


const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench className="w-7 h-7" />,
  settings: <Settings className="w-7 h-7" />,
  gauge: <Gauge className="w-7 h-7" />,
  zap: <Zap className="w-7 h-7" />,
  wind: <Wind className="w-7 h-7" />,
  "circle-dot": <CircleDot className="w-7 h-7" />,
}

interface CategoriesProps {
  data?: {
    heading?: string
    subheading?: string
    description?: string
    ctaTitle?: string
    ctaDescription?: string
    ctaButtonText?: string
    services?: Array<{
      number: string
      name: string
      description: string
      icon: string
    }>
  }
}

export function CategoriesSection({ data }: CategoriesProps) {
  const servicesList = data?.services || []

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
                  {data?.subheading || "Nuestros Servicios"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {data?.heading ? (
                  <span className="text-white">{data.heading}</span>
                ) : (
                  <>
                    <span className="text-white">Lo Que</span>
                    <br />
                    <span className="chrome-text">Ofrecemos</span>
                  </>
                )}
              </h2>
            </div>
            <p className="text-[#a0a0a0] text-lg max-w-md leading-relaxed lg:text-right">
              {data?.description || "Mecánica especializada para automóviles alemanes con la mejor calidad y garantía."}
            </p>
          </div>
        </ScrollAnimation>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service: any, index: number) => {
            // Fallback for hardcoded services if not dynamic
            const icon = iconMap[service.icon] || <Wrench className="w-7 h-7" />
            // Hardcoded colors for now as requested no CSS editing, defaulting to brand blue/red/grey rotation if dynamic
            const accents = ["#0066B1", "#c41e3a", "#c0c0c0"]
            const accent = service.accent || accents[index % 3]

            return (
              <ScrollAnimation key={index} delay={index * 100} direction="up">
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
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <div style={{ color: accent }}>{icon}</div>
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
                    style={{ backgroundColor: accent }}
                  />
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={200} direction="up">
          <div className="mt-16 bg-gradient-to-r from-[#0066B1]/10 via-[#111111] to-[#c41e3a]/10 border border-[#1a1a1a] rounded-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {data?.ctaTitle || "¿Necesita una revisión de su vehículo?"}
                </h3>
                <p className="text-[#a0a0a0]">
                  {data?.ctaDescription || "Reserve una cita para diagnóstico, reparación o mantenimiento."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#0066B1] hover:bg-[#0077cc] text-white font-bold px-8 py-6 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_30px_rgba(0,102,177,0.4)]"
                  asChild
                >
                  <a href="#contacto">{data?.ctaButtonText || "Solicitar Cita"}</a>
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

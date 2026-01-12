"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar, MapPin, Clock, ChevronRight, Wrench, Settings, Activity, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    title: "BMW",
    subtitle: "Performance & Precision",
    color: "#0066B1",
  },
  {
    title: "Mercedes",
    subtitle: "Elegance & Innovation",
    color: "#c41e3a",
  },
  {
    title: "Audi",
    subtitle: "Vorsprung durch Technik",
    color: "#0066B1",
  },
]

const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench className="w-7 h-7 text-[#0066B1] group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(0,102,177,0.5)]" />,
  settings: <Settings className="w-7 h-7 text-[#0066B1] group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(0,102,177,0.5)] animate-slow-spin-hover" />,
  package: <Package className="w-7 h-7 text-[#0066B1] group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(0,102,177,0.5)]" />,
  activity: <Activity className="w-7 h-7 text-[#0066B1] group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(0,102,177,0.5)]" />,
}

interface HeroProps {
  data?: {
    mainHeading?: string
    slides?: Array<{
      title: string
      subtitle: string
      color: string
    }>
    backgroundImage?: string
    description?: string // Added
  }
  services?: {
    cards?: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  settings?: {
    whatsappNumber?: string
    phoneNumber?: string
    address?: string
  }
}

export function HeroSection({ data, services, settings }: HeroProps) {
  const slides = data?.slides || heroSlides
  const cards = services?.cards || []

  // Ensure consistent slides logic
  const activeSlides = slides.length > 0 ? slides : heroSlides

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length)

    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={data?.backgroundImage || "/luxury-german-car-workshop-interior-dark-ambient-l.jpg"}

          alt={data?.mainHeading || "Taller Automotriz Premium"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0066B1]/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#0066B1]/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#0066B1]/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Main heading with animated brand rotation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                {data?.mainHeading ? (
                  <span className="text-white">{data.mainHeading}</span>
                ) : (
                  <>
                    <span className="text-white">Especialistas en</span>
                    <br />
                    <span className="chrome-text">Vehículos</span>
                  </>
                )}
                {/* Removed dynamic slide title to avoid redundancy if mainHeading is full, 
                    OR keep it if mainHeading is just the prefix. 
                    User asked to update textual content. 
                    If I use mainHeading, I might not want the dynamic suffix loop unless mainHeading implies it. 
                    But the loop is "activeSlides[currentSlide].title". 
                    If user changes mainHeading to "Bienvenidos a", then "BMW" etc makes sense.
                    If user sets mainHeading to "Taller Germana", then "BMW" appears after.
                    I will keep the loop. 
                */}
                <br />
                <span
                  className="inline-block transition-all duration-500"
                  style={{ color: activeSlides[currentSlide].color }}
                >
                  {activeSlides[currentSlide].title}
                </span>
              </h1>

              <p className="text-[#a0a0a0] text-lg italic transition-all duration-500" key={currentSlide}>
                {activeSlides[currentSlide].subtitle}
              </p>

              <p className="text-[#b0b0b0] text-lg md:text-xl max-w-lg leading-relaxed">
                {data?.description ? (
                  data.description
                ) : (
                  <>
                    Taller automotriz especializado en <span className="text-white font-medium">BMW</span>,{" "}
                    <span className="text-white font-medium">Mercedes Benz</span>,{" "}
                    <span className="text-white font-medium">Audi</span>,{" "}
                    <span className="text-white font-medium">Volkswagen</span> y{" "}
                    <span className="text-white font-medium">Mini Cooper</span>.
                  </>
                )}
              </p>
            </div>

            {/* M-Sport stripe accent */}
            <div className="h-1.5 w-40 m-stripe rounded-full" />

            <div className="flex items-center gap-2">
              {activeSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#0066B1]" : "w-3 bg-[#333] hover:bg-[#444]"
                    }`}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-8 py-7 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-105 group"
                asChild
              >
                <a href={`https://wa.me/${settings?.whatsappNumber || "573025459865"}`} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar Ahora
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#262626] text-white hover:bg-white hover:text-[#0a0a0a] font-bold px-8 py-7 rounded-sm uppercase tracking-wider text-sm transition-all group bg-transparent hover:scale-105"
                asChild
              >
                <a href="#contacto">
                  <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Agendar Cita
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <a
                href={`tel:+57${settings?.phoneNumber || "3025459865"}`}
                className="bg-[#111111]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-sm p-4 hover:border-[#0066B1] hover:bg-[#0066B1]/10 transition-all duration-300 group cursor-pointer hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#0066B1]/10 flex items-center justify-center group-hover:bg-[#0066B1] transition-colors">
                    <Phone className="w-5 h-5 text-[#0066B1] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[#a0a0a0] text-xs uppercase tracking-wider group-hover:text-[#0066B1] transition-colors">
                      Llámenos
                    </div>
                    <div className="text-white font-semibold">(+57) {settings?.phoneNumber || "302 545 9865"}</div>
                  </div>
                </div>
              </a>
              <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-sm p-4 hover:border-[#c41e3a] hover:bg-[#c41e3a]/10 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#c41e3a]/10 flex items-center justify-center group-hover:bg-[#c41e3a] transition-colors">
                    <Clock className="w-5 h-5 text-[#c41e3a] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[#a0a0a0] text-xs uppercase tracking-wider group-hover:text-[#c41e3a] transition-colors">
                      Horario
                    </div>
                    <div className="text-white font-semibold">Lun - Sáb</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative hidden lg:flex flex-col gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {cards.map((card: any, index: number) => (
              <div
                key={index}
                className="bg-[#111111]/90 backdrop-blur-md border border-[#1a1a1a] rounded-sm p-6 hover:border-[#0066B1] transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-sm bg-[#0066B1]/10 flex items-center justify-center group-hover:bg-[#0066B1] transition-colors text-2xl">
                    {iconMap[card.icon] || <Wrench className="w-7 h-7" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#0066B1] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{card.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#333] group-hover:text-[#0066B1] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}

            {/* Location card */}
            <div className="bg-[#0066B1] rounded-sm p-5 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-white" />
                <div>
                  <div className="text-white font-semibold">{settings?.address || "Bogotá, Colombia"}</div>
                  <div className="text-white/70 text-sm">Visítenos hoy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom M-stripe decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 m-stripe" />
    </section>
  )
}

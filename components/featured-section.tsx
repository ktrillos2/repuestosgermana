"use client"

import { Shield, Users, Award, ThumbsUp, Quote, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const values = [
  {
    icon: Users,
    title: "Mecánicos Expertos",
    description: "Técnicos y asesores especializados en marcas de autos alemanes.",
    accent: "#0066B1",
  },
  {
    icon: Award,
    title: "Habilidades Técnicas",
    description: "Equipo de trabajo siempre a su servicio para ofrecerle asesoría gratuita.",
    accent: "#c41e3a",
  },
  {
    icon: Shield,
    title: "Servicio Garantizado",
    description: "Repuestos garantizados para darle la seguridad de que compra lo mejor.",
    accent: "#c0c0c0",
  },
  {
    icon: ThumbsUp,
    title: "Trabajo Confiable",
    description: "Honestidad, confianza y seguridad para nuestros clientes y aliados.",
    accent: "#0066B1",
  },
]

const testimonials = [
  {
    id: 1,
    text: "Excelente Servicio. Atención rápida. El precio es ajustado al servicio y repuestos que ofrecieron.",
    name: "Daniel Villamizar",
    role: "Comerciante",
    rating: 5,
  },
  {
    id: 2,
    text: "Los repuestos que compré fueron entregados a tiempo y en óptimas condiciones. Y tienen buen descuento.",
    name: "Lucas Bernal",
    role: "Diseñador Gráfico",
    rating: 5,
  },
  {
    id: 3,
    text: "Increíble el nivel de conocimiento técnico. Diagnosticaron el problema de mi BMW en minutos.",
    name: "Carolina Méndez",
    role: "Empresaria",
    rating: 5,
  },
]

export function FeaturedSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[#0066B1]/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#c41e3a]/5 blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Why Choose Us section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image/Visual */}
            <ScrollAnimation direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src="/professional-mechanic-working-on-german-luxury-car.jpg"
                    alt="Mecánico experto trabajando"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>

                {/* M-stripe accent */}
                <div className="absolute top-8 -left-4 h-32 w-1.5 m-stripe rounded-full" />
              </div>
            </ScrollAnimation>

            {/* Right: Content */}
            <ScrollAnimation direction="right">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-12 h-px bg-[#c41e3a]" />
                    <span className="text-[#c41e3a] text-sm font-semibold tracking-widest uppercase">
                      Somos Los Mejores
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-white">Experiencia y</span>
                    <br />
                    <span className="chrome-text">Conocimientos</span>
                    <br />
                    <span className="text-[#0066B1]">Garantizados</span>
                  </h2>
                  <p className="text-[#a0a0a0] text-lg leading-relaxed">
                    Rapidez y honestidad en los servicios que ofrecemos y repuestos que comercializamos son nuestra
                    mejor recomendación.
                  </p>
                </div>

                {/* Values grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <ScrollAnimation key={index} delay={index * 100} direction="up">
                      <div className="group flex items-start gap-4 bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm p-5 hover:border-[#262626] transition-all h-full">
                        <div
                          className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${value.accent}15` }}
                        >
                          <value.icon className="w-6 h-6" style={{ color: value.accent }} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                          <p className="text-[#a0a0a0] text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-12 h-px bg-[#0066B1]" />
                <span className="text-[#0066B1] text-sm font-semibold tracking-widest uppercase">Testimonios</span>
                <div className="w-12 h-px bg-[#0066B1]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-white">Hablan Nuestros</span> <span className="text-[#c41e3a]">Clientes</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} delay={index * 150} direction="up">
                <div className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm p-8 hover:border-[#0066B1]/30 transition-all duration-300 relative h-full">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-[#1a1a1a] mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#a0a0a0] leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066B1] to-[#0066B1]/50 flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-[#a0a0a0] text-sm">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066B1] group-hover:w-full transition-all duration-500" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <ScrollAnimation delay={200} direction="up">
          <div className="mt-24 text-center">
            <div className="inline-block bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Llámenos Ya o Visítenos!</h3>
              <p className="text-[#a0a0a0] text-lg mb-8 max-w-lg mx-auto">
                Estamos listos para atender sus necesidades de mantenimiento y repuestos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-10 py-7 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                  asChild
                >
                  <a href="https://wa.me/573043598195" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#0066B1] hover:bg-[#0077cc] text-white font-bold px-10 py-7 rounded-sm uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_30px_rgba(0,102,177,0.4)]"
                  asChild
                >
                  <a href="tel:+573043598195">
                    <Phone className="mr-2 w-5 h-5" />
                    (+57) 304 359 8195
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

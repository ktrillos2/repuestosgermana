"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/components/scroll-animation"
import { sendEmail } from "@/app/actions"
import { handleWhatsAppClick } from "@/lib/gtag"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: ["(+57) 302 545 9865"], // Default fallback
    color: "#0066B1",
    href: "tel:",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@repuestosgermana.com"],
    color: "#c41e3a",
    href: "mailto:info@repuestosgermana.com",
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 8:00 - 17:00", "Sábado: 8:30 - 15:00"],
    color: "#0066B1",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Bogotá, Colombia"],
    color: "#c41e3a",
  },
]

interface ContactProps {
  data?: {
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    phoneTitle?: string;
    emailTitle?: string;
    scheduleTitle?: string;
    locationTitle?: string;
    whatsappTitle?: string;
    whatsappDescription?: string;
    whatsappButtonText?: string;
    formTitle?: string;
    formDescription?: string;
    formButtonText?: string;
  };
  settings?: {
    phoneNumber?: string;
    whatsappNumber?: string;
    email?: string;
    address?: string;
    schedule?: string[];
    socials?: {
      facebook?: string;
      instagram?: string;
    };
  };
}

export function ContactSection({ data, settings }: ContactProps) {

  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Use Form Data
    const formData = new FormData()
    formData.append("nombre", formState.nombre)
    formData.append("telefono", formState.telefono)
    formData.append("email", formState.email)
    formData.append("mensaje", formState.mensaje)

    const result = await sendEmail(formData)

    if (result.success) {
      setIsSubmitted(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({ nombre: "", telefono: "", email: "", mensaje: "" })
      }, 3000)
    } else {
      alert("Hubo un error al enviar el mensaje. Por favor intente nuevamente.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066B1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c41e3a]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="text-[#0066B1] text-sm font-semibold uppercase tracking-wider">{data?.sectionSubtitle || "Contáctenos"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {data?.sectionTitle ? (
                <span className="text-white">{data.sectionTitle}</span>
              ) : (
                <>
                  <span className="text-white">Estamos Aquí Para </span>
                  <span className="chrome-text">Ayudarte</span>
                </>
              )}
            </h2>
            <div className="h-1.5 w-24 m-stripe rounded-full mx-auto" />
            <p className="text-[#a0a0a0] max-w-2xl mx-auto mt-6 text-lg">
              {data?.sectionDescription || "Agenda tu cita o contáctanos para cualquier consulta sobre tu vehículo alemán"}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                // Dynamic overrides
                let details = info.details;
                let href = info.href;
                let title = info.title;

                if (info.title === "Teléfonos") {
                  title = data?.phoneTitle || "Teléfonos";
                  if (settings?.phoneNumber) {
                    details = [`(+57) ${settings.phoneNumber}`, `(+57) ${settings.whatsappNumber || ""}`];
                    href = `tel:+57${settings.phoneNumber}`;
                  }
                }
                if (info.title === "Email") {
                  title = data?.emailTitle || "Email";
                  if (settings?.email) {
                    details = [settings.email];
                    href = `mailto:${settings.email}`;
                  }
                }
                if (info.title === "Horario") {
                  title = data?.scheduleTitle || "Horario";
                  if (settings?.schedule) {
                    details = settings.schedule;
                  }
                }
                if (info.title === "Ubicación") {
                  title = data?.locationTitle || "Ubicación";
                  if (settings?.address) {
                    details = [settings.address];
                  }
                }

                return (
                  <ScrollAnimation key={index} delay={index * 100} direction="left">
                    <div className="bg-[#111111] border border-[#1a1a1a] rounded-sm p-6 hover:border-[#0066B1]/50 transition-all duration-300 group hover:scale-105 h-full">
                      {info.href ? (
                        <a href={info.href} className="block">
                          <div className="flex items-start gap-4">
                            <div
                              className="w-12 h-12 rounded-sm flex items-center justify-center transition-colors"
                              style={{ backgroundColor: `${info.color}15` }}
                            >
                              <info.icon className="w-6 h-6 transition-colors" style={{ color: info.color }} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-2 group-hover:text-[#0066B1] transition-colors">
                                {title}
                              </h3>
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-[#a0a0a0] text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div
                            className="w-12 h-12 rounded-sm flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${info.color}15` }}
                          >
                            <info.icon className="w-6 h-6 transition-colors" style={{ color: info.color }} />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-2">{title}</h3>
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-[#a0a0a0] text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollAnimation>
                )
              })}


            </div>

            {/* WhatsApp CTA */}
            <ScrollAnimation delay={400} direction="left">
              <div className="bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/30 rounded-sm p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-white font-bold text-lg">{data?.whatsappTitle || "Respuesta Inmediata"}</h3>
                    <p className="text-[#a0a0a0] text-sm">{data?.whatsappDescription || "Contáctanos por WhatsApp para atención rápida"}</p>
                  </div>
                  <Button
                    className="bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-6 py-6 rounded-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                    asChild
                  >
                    <a href={`https://wa.me/57${settings?.whatsappNumber || "3025459865"}`} target="_blank" rel="noopener noreferrer" onClick={(e) => handleWhatsAppClick(e, `https://wa.me/57${settings?.whatsappNumber || "3025459865"}`)}>
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {data?.whatsappButtonText || "WhatsApp"}
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

          </div>

          {/* Contact form */}
          <ScrollAnimation direction="right">
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-sm p-8 hover:border-[#0066B1]/30 transition-colors">
              <h3 className="text-white text-2xl font-bold mb-2">{data?.formTitle || "Envíanos un Mensaje"}</h3>
              <p className="text-[#a0a0a0] mb-6">{data?.formDescription || "Completa el formulario y te contactaremos pronto"}</p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-[#25D366]" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">Mensaje Enviado</h4>
                  <p className="text-[#a0a0a0]">Nos pondremos en contacto contigo pronto</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#a0a0a0] text-sm mb-2 block">Nombre</label>
                      <Input
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        placeholder="Tu nombre"
                        className="bg-[#0a0a0a] border-[#1a1a1a] text-white placeholder:text-[#555] focus:border-[#0066B1] rounded-sm h-12"
                      />
                    </div>
                    <div>
                      <label className="text-[#a0a0a0] text-sm mb-2 block">Teléfono</label>
                      <Input
                        required
                        type="tel"
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                        placeholder="Tu teléfono"
                        className="bg-[#0a0a0a] border-[#1a1a1a] text-white placeholder:text-[#555] focus:border-[#0066B1] rounded-sm h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#a0a0a0] text-sm mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Tu email (opcional)"
                      className="bg-[#0a0a0a] border-[#1a1a1a] text-white placeholder:text-[#555] focus:border-[#0066B1] rounded-sm h-12"
                    />
                  </div>
                  <div>
                    <label className="text-[#a0a0a0] text-sm mb-2 block">Mensaje</label>
                    <Textarea
                      required
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      placeholder="¿Cómo podemos ayudarte?"
                      rows={4}
                      className="bg-[#0a0a0a] border-[#1a1a1a] text-white placeholder:text-[#555] focus:border-[#0066B1] rounded-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0066B1] hover:bg-[#0077cc] text-white font-bold py-6 rounded-sm uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(0,102,177,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        {data?.formButtonText || "Enviar Mensaje"}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

"use server"

import { Resend } from "resend"
import { client } from "@/sanity/lib/client"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendConversionAlert(source: string, details?: string) {
    try {
        const settings = await client.fetch(SETTINGS_QUERY)
        const toEmail = settings?.email || "info@repuestosgermana.com"

        // Send alert to admin
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "linamariaesp2106@gmail.com", // For testing, as seen in actions.ts
            // to: toEmail, // Production
            subject: `🔔 Nueva Conversión: ${source}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #4B5563;">¡Nueva Conversión Detectada!</h2>
                    <p>Un usuario ha interactuado con un elemento de contacto en la web.</p>
                    
                    <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Origen:</strong> ${source}</p>
                        ${details ? `<p><strong>Detalles:</strong> ${details}</p>` : ''}
                        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
                    </div>

                    <p style="font-size: 12px; color: #9CA3AF;">Este es un mensaje automático del sistema de análisis de Repuestos Germana.</p>
                </div>
            `
        })

        return { success: true }
    } catch (error) {
        console.error("Failed to send conversion alert:", error)
        return { success: false, error: "Failed to send alert" }
    }
}

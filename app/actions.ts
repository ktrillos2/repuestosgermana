"use server"

import { Resend } from "resend"
import { client } from "@/sanity/lib/client"
import { SETTINGS_QUERY } from "@/sanity/lib/queries"
import { getContactEmailHtml } from "@/lib/email-templates"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
    const nombre = formData.get("nombre") as string
    const telefono = formData.get("telefono") as string
    const email = formData.get("email") as string
    const mensaje = formData.get("mensaje") as string

    try {
        // Fetch destination email from Sanity
        const settings = await client.fetch(SETTINGS_QUERY)
        const toEmail = settings?.email || "info@repuestosgermana.com"

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev", // Using default for now
            to: "linamariaesp2106@gmail.com", // Updated to verified email for testing
            // to: toEmail, // Production would use this
            subject: `Nuevo mensaje de contacto de ${nombre}`,
            html: getContactEmailHtml({
                nombre,
                email,
                telefono,
                mensaje,
                logoUrl: settings?.logo
            }),
        })

        if (error) {
            console.error("Resend error:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (error) {
        console.error("Server error:", error)
        return { success: false, error: "Error sending email" }
    }
}

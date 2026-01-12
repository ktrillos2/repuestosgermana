import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Configuración General',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Nombre de la Empresa',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'footerDescription',
            title: 'Descripción Footer',
            type: 'text',
            rows: 3,
            description: 'Texto breve que aparece debajo del logo en el footer.',
        }),
        defineField({
            name: 'headerMenu',
            title: 'Menú Header',
            type: 'reference',
            to: [{ type: 'navigation' }]
        }),
        defineField({
            name: 'footerMenu',
            title: 'Menú Footer',
            type: 'reference',
            to: [{ type: 'navigation' }]
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Número de Teléfono (Llamadas)',
            type: 'string',
            description: 'Ej: 3025459865',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'Número de WhatsApp',
            type: 'string',
            description: 'Ej: 3043598195 (Sin espacios ni símbolos)',
        }),
        defineField({
            name: 'email',
            title: 'Correo Electrónico',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Dirección Principal',
            type: 'text',
        }),
        defineField({
            name: 'schedule',
            title: 'Horario de Atención',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Ej: ["Lun - Vie: 8:00 - 17:00", "Sábado: 8:30 - 15:00"]',
        }),
        defineField({
            name: 'googleMapsUrl',
            title: 'URL de Google Maps',
            type: 'url',
        }),
        defineField({
            name: 'socials',
            title: 'Redes Sociales',
            type: 'object',
            fields: [
                defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
                defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
            ],
        }),
    ],
})

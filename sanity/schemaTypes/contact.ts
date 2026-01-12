import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Sección Contacto',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionSubtitle',
            title: 'Subtítulo Sección',
            type: 'string',
            initialValue: 'Contáctenos',
        }),
        defineField({
            name: 'sectionTitle',
            title: 'Título Sección',
            type: 'string',
            initialValue: 'Estamos Aquí Para Ayudarle',
        }),
        defineField({
            name: 'sectionDescription',
            title: 'Descripción Sección',
            type: 'text',
            rows: 2,
            initialValue: 'Agenda tu cita o contáctanos para cualquier consulta sobre tu vehículo alemán',
        }),
        // Info Cards Titles
        defineField({
            name: 'phoneTitle',
            title: 'Título Tarjeta Teléfonos',
            type: 'string',
            initialValue: 'Teléfonos',
        }),
        defineField({
            name: 'emailTitle',
            title: 'Título Tarjeta Email',
            type: 'string',
            initialValue: 'Email',
        }),
        defineField({
            name: 'scheduleTitle',
            title: 'Título Tarjeta Horario',
            type: 'string',
            initialValue: 'Horario',
        }),
        defineField({
            name: 'locationTitle',
            title: 'Título Tarjeta Ubicación',
            type: 'string',
            initialValue: 'Ubicación',
        }),
        // WhatsApp CTA
        defineField({
            name: 'whatsappTitle',
            title: 'Título WhatsApp CTA',
            type: 'string',
            initialValue: 'Respuesta Inmediata',
        }),
        defineField({
            name: 'whatsappDescription',
            title: 'Descripción WhatsApp CTA',
            type: 'string',
            initialValue: 'Contáctanos por WhatsApp para atención rápida',
        }),
        defineField({
            name: 'whatsappButtonText',
            title: 'Texto Botón WhatsApp',
            type: 'string',
            initialValue: 'WhatsApp',
        }),
        // Form
        defineField({
            name: 'formTitle',
            title: 'Título Formulario',
            type: 'string',
            initialValue: 'Envíanos un Mensaje',
        }),
        defineField({
            name: 'formDescription',
            title: 'Descripción Formulario',
            type: 'string',
            initialValue: 'Completa el formulario y te contactaremos pronto',
        }),
        defineField({
            name: 'formButtonText',
            title: 'Texto Botón Enviar',
            type: 'string',
            initialValue: 'Enviar Mensaje',
        }),
    ],
})

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Sección Destacada (Nosotros/Testimonios)',
    type: 'document',
    fields: [
        // Why Us Section
        defineField({
            name: 'whyUsSubtitle',
            title: 'Subtítulo "Por Qué Elegirnos"',
            type: 'string',
            initialValue: 'Somos Los Mejores',
        }),
        defineField({
            name: 'whyUsTitle',
            title: 'Título "Por Qué Elegirnos"',
            type: 'string',
            initialValue: 'Experiencia y Conocimientos Garantizados',
        }),
        defineField({
            name: 'whyUsDescription',
            title: 'Descripción "Por Qué Elegirnos"',
            type: 'text',
        }),
        defineField({
            name: 'whyUsImage',
            title: 'Imagen Principal',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'values',
            title: 'Valores / Ventajas',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'value',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Título' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción' }),
                        defineField({
                            name: 'icon',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Users', value: 'users' },
                                    { title: 'Award', value: 'award' },
                                    { title: 'Shield', value: 'shield' },
                                    { title: 'ThumbsUp', value: 'thumbs-up' },
                                ]
                            }
                        }),
                    ],
                }),
            ],
        }),

        // Testimonials Section
        defineField({
            name: 'testimonialsSubtitle',
            title: 'Subtítulo Testimonios',
            type: 'string',
            initialValue: 'Testimonios',
        }),
        defineField({
            name: 'testimonialsTitle',
            title: 'Título Testimonios',
            type: 'string',
            initialValue: 'Hablan Nuestros Clientes',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonios',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'testimonial',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Nombre del Cliente' }),
                        defineField({ name: 'role', type: 'string', title: 'Rol / Profesión' }),
                        defineField({ name: 'text', type: 'text', title: 'Comentario' }),
                        defineField({ name: 'rating', type: 'number', title: 'Calificación (1-5)', initialValue: 5 }),
                    ],
                }),
            ],
        }),

        // CTA Section
        defineField({
            name: 'ctaTitle',
            title: 'Título CTA Final',
            type: 'string',
            initialValue: '¡Llámenos Ya o Visítenos!',
        }),
        defineField({
            name: 'ctaDescription',
            title: 'Descripción CTA Final',
            type: 'text',
            rows: 2,
            initialValue: 'Estamos listos para atender sus necesidades de mantenimiento y repuestos.',
        }),
        defineField({
            name: 'ctaWhatsappText',
            title: 'Texto Botón WhatsApp',
            type: 'string',
            initialValue: 'WhatsApp',
        }),
        defineField({
            name: 'ctaPhoneText',
            title: 'Texto Botón Llamar',
            type: 'string',
            initialValue: 'Llamar Ya',
        }),
    ],
})

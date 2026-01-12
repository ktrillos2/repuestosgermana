import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Sección Destacada (Nosotros/Testimonios)',
    type: 'document',
    fields: [
        // Why Us Section
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
    ],
})

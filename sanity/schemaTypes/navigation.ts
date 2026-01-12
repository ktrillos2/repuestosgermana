import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navegación (Menús)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título del Menú',
            type: 'string',
            description: 'Ej: Header Menu, Footer Menu',
        }),
        defineField({
            name: 'slug',
            title: 'Identificador',
            type: 'slug',
            options: { source: 'title' }
        }),
        defineField({
            name: 'items',
            title: 'Elementos del Menú',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'navItem',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Nombre' }),
                        defineField({ name: 'href', type: 'string', title: 'Enlace' }),
                    ]
                })
            ]
        })
    ],
})

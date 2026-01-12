import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Sección Hero (Inicio)',
    type: 'document',
    fields: [
        defineField({
            name: 'mainHeading',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: Especialistas en Vehículos',
        }),
        defineField({
            name: 'description',
            title: 'Descripción (Texto Largo)',
            type: 'text',
            rows: 3,
            description: 'El texto descriptivo debajo del título principal.',
        }),
        defineField({
            name: 'slides',
            title: 'Diapositivas (Marcas)',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'slide',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Marca (Título)' }),
                        defineField({ name: 'subtitle', type: 'string', title: 'Subtítulo' }),
                        defineField({ name: 'color', type: 'string', title: 'Color Hex (#RRGGBB)' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Imagen de Fondo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})

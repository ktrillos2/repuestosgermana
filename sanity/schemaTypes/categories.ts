import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'categories',
    title: 'Sección Categorías (Servicios)',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Título Principal',
            type: 'string',
            initialValue: 'Lo Que Ofrecemos',
        }),
        defineField({
            name: 'subheading',
            title: 'Subtítulo',
            type: 'string',
            initialValue: 'Nuestros Servicios',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: 'Mecánica especializada para automóviles alemanes con la mejor calidad y garantía.',
        }),
        defineField({
            name: 'services',
            title: 'Lista de Servicios',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'categoryService',
                    fields: [
                        defineField({ name: 'number', type: 'string', title: 'Número (01, 02...)' }),
                        defineField({ name: 'name', type: 'string', title: 'Nombre del Servicio' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción' }),
                        defineField({
                            name: 'icon',
                            title: 'Icono (Nombre Lucide)',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Wrench (Llave)', value: 'wrench' },
                                    { title: 'Settings (Ajustes)', value: 'settings' },
                                    { title: 'Gauge (Medidor)', value: 'gauge' },
                                    { title: 'Zap (Rayo)', value: 'zap' },
                                    { title: 'Wind (Viento)', value: 'wind' },
                                    { title: 'CircleDot (Rueda/Freno)', value: 'circle-dot' },
                                ]
                            }
                        }),
                    ],
                }),
            ],
        }),
    ],
})

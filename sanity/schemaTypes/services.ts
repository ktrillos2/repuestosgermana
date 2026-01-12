import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'services',
    title: 'Sección de Servicios',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título de la Sección',
            type: 'string',
        }),
        defineField({
            name: 'cards',
            title: 'Tarjetas de Servicio',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'serviceCard',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Título del Servicio' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción' }),
                        defineField({
                            name: 'icon',
                            title: 'Icono',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Llave (Mecánica)', value: 'wrench' },
                                    { title: 'Engranaje (Repuestos)', value: 'settings' },
                                    { title: 'Paquete (Importación)', value: 'package' },
                                    { title: 'Actividad (Diagnóstico)', value: 'activity' },
                                ],
                            },
                        }),
                    ],
                }),
            ],
        }),
    ],
})

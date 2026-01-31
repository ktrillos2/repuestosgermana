import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton for Settings
      S.listItem()
        .title('Configuración General')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),

      // Singleton for Contact
      S.listItem()
        .title('Sección Contacto')
        .id('contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),

      // Regular document types
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['settings', 'contact'].includes(item.getId()!)
      ),
    ])

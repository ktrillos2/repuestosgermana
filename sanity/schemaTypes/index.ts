import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import services from './services'
import settings from './settings'
import navigation from './navigation'
import categories from './categories'
import featured from './featured'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, services, settings, navigation, categories, featured],
}

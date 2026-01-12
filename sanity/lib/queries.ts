import { groq } from "next-sanity"

export const HERO_QUERY = groq`*[_type == "hero"][0] {
  ...,
  "backgroundImage": backgroundImage.asset->url,
  slides[] {
    ...,
    "image": image.asset->url
  }
}`

export const SERVICES_QUERY = groq`*[_type == "services"][0]`

export const SETTINGS_QUERY = groq`*[_type == "settings"][0] {
  ...,
  "logo": logo.asset->url,
  headerMenu->{
    items[]
  },
  footerMenu->{
    items[]
  }
}`

export const CATEGORIES_QUERY = groq`*[_type == "categories"][0]`

export const FEATURED_QUERY = groq`*[_type == "featured"][0] {
  ...,
  "whyUsImage": whyUsImage.asset->url
}`

export const CONTACT_QUERY = groq`*[_type == "contact"][0]`

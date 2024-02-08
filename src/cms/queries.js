import { groq } from 'next-sanity'

export const GET_ABOUT = groq`*[_type == "about"][0]{
  _id,
  title,
  heading,
  summary,
  aboutGif {alt, "image": asset->url}
}`
export const GET_CONTACT = groq`*[_type == "contact"][0]`
export const GET_EXPERIENCE = groq`*[_type == "experience"][0]{
  _id,
  title,
  summary,
  'cards': cards[] {
    company,
    logo {alt, "image": asset->url},
    title,
    date,
    notes
  },
  specialtyTitle,
  specialtySummary,
  'specialtyLinks': specialtyLinks[] {
    name,
    link,
    logo {alt, "image": asset->url},
  }
}`
export const GET_LANDING = groq`*[_type == "landing"][0]{
  _id,
  title,
  typewriterText,
  welcomeGif {alt, "image": asset->url},
  iconGif {alt, "image": asset->url},
  "resumeURL": resume.asset->url,
  aboutLinkGif {alt, "image": asset->url},
  contactLinkGif {alt, "image": asset->url}
}`
export const GET_RECORDS = groq`*[_type == "records"][0]`

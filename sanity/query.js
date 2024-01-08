import { groq } from 'next-sanity'
import client from './client'

async function querySanity (query) {
  const data = await client
    .fetch(query)
    .then(data => data[0])
    .catch(err => err)
  return data
}
export async function getAbout () {
  return querySanity(
    groq`*[_type == "about"]{
      _id,
      title,
      heading,
      summary,
      aboutGif {alt, "image": asset->url}
    }`
  )
}
export async function getContact () {
  return querySanity(
    groq`*[_type == "contact"]{
      _id,
      title,
      summary,
      successMessage,
      contactLinks
    }`
  )
}
export async function getExperience () {
  return querySanity(
    groq`*[_type == "experience"]{
      _id,
      title,
      summary,
      'cards': cards[] {
        company,
        logo {alt, "image": asset->url},
        title,
        date,
        notes
      }
    }`
  )
}
export async function getRecords () {
  return querySanity(
    groq`*[_type == "records"]{
      _id,
      title,
      summary
    }`
  )
}
export async function getSpecialties () {
  return querySanity(
    groq`*[_type == "specialties"]{
      _id,
      title,
      summary,
      specialtyLinks
    }`
  )
}

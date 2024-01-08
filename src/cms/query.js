import { groq } from 'next-sanity'
import client from './client'

export async function querySanity (query) {
  const data = await client
    .fetch(groq`${query}`)
    .then(data => data[0])
    .catch(err => err)
  return data
}

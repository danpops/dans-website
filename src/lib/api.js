import { formatCollectionRelease, formatRelease } from './dataUtils'

export { fetchDiscogsData, fetchDiscogsRelease, sendContactMessage }

const API_URL = 'https://api.discogs.com'
const RELEASES_URL = `${API_URL}/users/nowspinninglps/collection/releases/0`

async function fetchDiscogsData ({
  discogsKey = '',
  page = 1,
  key = 'artist',
  order = 'asc'
}) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Discogs token=${discogsKey}`
    },
    body: null
  }
  const url = `${RELEASES_URL}?sort=${key}&sort_order=${order}&per_page=50&page=${page}`
  try {
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const records = data.releases.map(formatCollectionRelease)
    return { records, pagination: data.pagination }
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
async function fetchDiscogsRelease ({ discogsKey, id }) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Discogs token=${discogsKey}`
    },
    body: null
  }
  const url = `${API_URL}/releases/${id}`
  try {
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const release = formatRelease(data)
    return release
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
async function sendContactMessage ({ apiUrl, data, apiKey }) {
  const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
  const body = JSON.stringify(data)
  const result = fetch(apiUrl, { method: 'POST', headers, body })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(err => {
      console.error(err)
      throw new Error('Unable to send message. Please try again later.')
    })
  return result
}

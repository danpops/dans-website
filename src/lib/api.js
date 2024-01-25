import { formatReleases } from './dataUtils'

export { fetchDiscogsData, sendContactMessage }

const API_URL = 'https://api.discogs.com'
const RELEASES_URL = `${API_URL}/users/nowspinninglps/collection/releases/0`

async function fetchDiscogsData ({
  discogsKey = '',
  page = 1,
  sort = 'artist',
  sortOrder = 'asc'
}) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Discogs token=${discogsKey}`
    },
    body: null
  }
  const url = `${RELEASES_URL}?sort=${sort}&sort_order=${sortOrder}&per_page=50&page=${page}`
  try {
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const records = data.releases.map(formatReleases)
    return { records, pagination: data.pagination }
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
async function sendContactMessage ({ url, data, apiKey }) {
  const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
  const body = JSON.stringify(data)
  const result = fetch(url, { method: 'POST', headers, body }).then(
    response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
  )
  return result
}

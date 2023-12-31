export { fetchDiscogsData }

export const COLLECTION_URL =
  'https://www.discogs.com/user/nowspinninglps/collection?header=1'
const API_URL = 'https://api.discogs.com'
const RELEASES_URL = `${API_URL}/users/nowspinninglps/collection/releases/0`

async function fetchDiscogsData ({ discogsKey = '', page = 1 }) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Discogs token=${discogsKey}`
    },
    body: null
  }
  const url = `${RELEASES_URL}?sort=artist&sort_order=asc&per_page=50&page=${page}`
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
function formatReleases (item) {
  return {
    id: item.id,
    title: item.basic_information.title,
    artist: item.basic_information.artists
      .map(item => item.name.replace(/\(\d+\)/g, '').trim())
      .join(', '),
    dateAdded: item.date_added
  }
}

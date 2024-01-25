export { formatReleases, getPageNumbers }

const formatArtistName = ({ name }) => name.replace(/\(\d+\)/g, '').trim()
const formatArtists = artists => artists.map(formatArtistName).join(', ')
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
function formatDate (inputDate) {
  const date = new Date(inputDate)
  const monthName = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${monthName} ${day}, ${year}`
}
function formatReleases (item) {
  const id = item.id
  const title = item.basic_information.title
  const artist = formatArtists(item.basic_information.artists)
  const dateAdded = formatDate(item.date_added)
  return { id, title, artist, dateAdded }
}
function getPageNumbers (totalPages, currentPage) {
  const result = []
  // Ensure currentPage is within valid range
  currentPage = Math.min(Math.max(currentPage, 1), totalPages)
  // Add two numbers before the current page
  for (let i = currentPage - 2; i < currentPage; i++) {
    i > 0 && result.push(i)
  }
  // Add the current page
  result.push(currentPage)
  // Add two numbers after the current page
  for (let i = currentPage + 1; i <= currentPage + 2; i++) {
    i <= totalPages && result.push(i)
  }
  return result
}

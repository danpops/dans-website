export { formatReleases, getPageNumbers }

const composeFormatDescription = descriptions =>
  descriptions?.filter(desc => desc !== 'Album')?.join(' ') ?? ''
function composeFormat (format) {
  const name = format.name
  const qty = format.qty
  const text = format.text ?? ''
  const descriptions = composeFormatDescription(format?.descriptions)
  const qtyString = Number(qty) > 1 ? `${qty} x` : ''
  return `${qtyString} ${name} ${descriptions} ${text}`
}
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
  const dateAdded = formatDate(item.date_added)
  const information = item.basic_information
  const title = information.title
  const artist = formatArtists(information.artists)
  const year = information.year
  const releaseYear = year === 0 ? 'N/A' : year
  const formats = information.formats.map(composeFormat).join(', ')
  const coverImage = information.cover_image
  const thumbImage = information.thumb
  return {
    id,
    title,
    artist,
    dateAdded,
    releaseYear,
    formats,
    coverImage,
    thumbImage
  }
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

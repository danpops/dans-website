import { SYNTH_NOTES } from '@/hooks/useSynthNote'
import { Frequency } from 'tone'

export {
  formatCollectionRelease,
  formatDate,
  formatRelease,
  generateRandomNotes,
  getPageNumbers,
  trimText
}

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
function formatCollectionRelease (item) {
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
function formatRelease (release) {
  const id = release.id
  const title = release.title
  const artist = formatArtists(release.artists)
  const labels = release.labels.map(item => item.name).join(', ')
  const dateAdded = formatDate(release.date_added)
  const formats = release.formats.map(composeFormat).join(', ')
  const genres = release.genres.join(', ')
  const coverImage = release.images[0].uri
  const thumbImage = release.thumb
  const releaseYear = release.year
  const tracklist = release.tracklist
  const country = release.country
  const have = release.community.have
  const want = release.community.want
  const community = { have, want }
  return {
    id,
    title,
    artist,
    tracklist,
    dateAdded,
    releaseYear,
    formats,
    labels,
    genres,
    country,
    coverImage,
    thumbImage,
    community
  }
}
/**
 * Generate note names for a specified number of notes.
 *
 * @param {number} numNotes The number of notes to generate.
 * @param {number} octave The octave to start from.
 * @returns {string[]} Array of note names with their octave.
 */
export function generateNoteNames (numNotes, octave = 3) {
  const noteNames = []
  let note = `C${octave}`
  for (let i = 0; i < numNotes; i++) {
    noteNames.push(note)
    note = Frequency(note).transpose(1).toNote()
  }
  return noteNames
}

/**
 * Create a DOM element for a note.
 *
 * @param {string} note The note name.
 * @returns {HTMLElement} The created element.
 */
export function createNoteEl (note) {
  const noteEl = document.createElement('div')
  const color = note.includes('#') ? 'black' : 'white'
  noteEl.classList.add('key', color)
  return noteEl
}

/**
 * Generate an array of notes with their properties.
 *
 * @param {number} numNotes The number of notes to generate.
 * @param {number} octave The octave to start from.
 * @returns {object[]} Array of notes with their properties.
 */
export function generateNotes (numNotes, octave) {
  const notes = []
  const noteNames = generateNoteNames(numNotes, octave)
  const chars = "awsedftgyhujkolp;'".split('')

  for (let i = 0; i < noteNames.length; i++) {
    const note = noteNames[i]
    notes.push({
      note,
      frequency: Frequency(note).toFrequency(),
      char: chars[i] ?? '',
      octave: Number(note.slice(-1)),
      color: note.includes('#') ? 'black' : 'white',
      active: false
    })
  }
  return notes
}
function generateRandomNotes (totalNotes = 4) {
  const notesArray = Object.keys(SYNTH_NOTES)
  const randomNotes = []
  for (let i = 0; i < totalNotes; i++) {
    const randomIndex = Math.floor(Math.random() * notesArray.length)
    const randomNote = notesArray[randomIndex]
    randomNotes.push(randomNote)
  }
  return randomNotes
}
function trimText (inputString, maxLength = 40) {
  if (inputString.length <= maxLength) {
    return inputString
  }
  const substring = inputString.substring(0, maxLength)
  return `${substring}...`
}
function getPageNumbers (totalPages, currentPage) {
  if (!totalPages) return null
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

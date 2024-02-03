/* globals describe, expect, it */
const {
  formatRelease,
  formatCollectionRelease,
  getPageNumbers,
  trimText
} = require('@/lib/dataUtils')
const {
  DISCOGS_RELEASE,
  COLLECTION_RELEASE
} = require('./__mocks__/discogs.mock')

describe('dataUtils tests', () => {
  describe('formatRelease', () => {
    it('should format discogs release payload', () => {
      const release = DISCOGS_RELEASE
      const actual = formatRelease(release)
      const expected = {
        id: release.id,
        title: release.title,
        artist: 'A Tribe Called Quest',
        tracklist: release.tracklist,
        dateAdded: 'April 27, 2022',
        releaseYear: release.year,
        formats:
          ' Vinyl LP 45 RPM Green,  Vinyl LP 45 RPM Red,  All Media Club Edition Reissue Remastered Gatefold',
        labels: 'Jive, Sony Music Commercial Music Group',
        genres: 'Hip Hop',
        country: release.country,
        coverImage: release.images[0].uri,
        thumbImage: release.thumb,
        community: {
          want: release.community.want,
          have: release.community.have
        }
      }
      expect(actual).toStrictEqual(expected)
    })
  })
  describe('formatCollectionRelease', () => {
    it('should format collection release', () => {
      const release = COLLECTION_RELEASE
      const actual = formatCollectionRelease(release)
      const expected = {
        id: release.id,
        title: release.basic_information.title,
        artist: 'Young Thug',
        dateAdded: 'May 20, 2021',
        releaseYear: release.basic_information.year,
        formats: '2 x Vinyl LP Club Edition Reissue Green Translucent',
        coverImage: release.basic_information.cover_image,
        thumbImage: release.basic_information.thumb
      }
      expect(actual).toStrictEqual(expected)
    })
    it('should return N/A for missing year', () => {
      const release = {
        ...COLLECTION_RELEASE,
        basic_information: { ...COLLECTION_RELEASE.basic_information, year: 0 }
      }
      const actual = formatCollectionRelease(release)
      const expected = {
        id: release.id,
        title: release.basic_information.title,
        artist: 'Young Thug',
        dateAdded: 'May 20, 2021',
        releaseYear: 'N/A',
        formats: '2 x Vinyl LP Club Edition Reissue Green Translucent',
        coverImage: release.basic_information.cover_image,
        thumbImage: release.basic_information.thumb
      }
      expect(actual).toStrictEqual(expected)
    })
  })
  describe('getPageNumbers', () => {
    it('should return null when no total pages', () => {
      const totalPages = undefined
      const actual = getPageNumbers(totalPages, 4)
      const expected = null
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with prev 2 pages + current page + next 2 pages', () => {
      const totalPages = 10
      const currentPage = 5
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [3, 4, 5, 6, 7]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with current page + next 2 pages if first page', () => {
      const totalPages = 5
      const currentPage = 1
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [1, 2, 3]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with current page + prev 2 pages if last page', () => {
      const totalPages = 5
      const currentPage = 5
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [3, 4, 5]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with current page if only page', () => {
      const totalPages = 1
      const currentPage = 1
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [1]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with prev 2 pages + current page + next page if second last page', () => {
      const totalPages = 5
      const currentPage = 4
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [2, 3, 4, 5]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with prev page + current page + next 2 pages if second page', () => {
      const totalPages = 5
      const currentPage = 2
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [1, 2, 3, 4]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with current page + next page if only 2 pages and is first page', () => {
      const totalPages = 2
      const currentPage = 1
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [1, 2]
      expect(actual).toStrictEqual(expected)
    })
    it('should return array with prev page + current page if only 2 pages and is second page', () => {
      const totalPages = 2
      const currentPage = 2
      const actual = getPageNumbers(totalPages, currentPage)
      const expected = [1, 2]
      expect(actual).toStrictEqual(expected)
    })
  })
  describe('trimText', () => {
    it('should trim string to 40 characters by default', () => {
      const str =
        'Hello, I am a long string of text. I was created for this unit test to see if we can reduce the amount of characters.'
      const actual = trimText(str)
      const expected = 'Hello, I am a long string of text. I was...'
      expect(actual).toStrictEqual(expected)
    })
    it('should trim string to 5 characters with ellipsis', () => {
      const str = 'Hello, I am a long string of text'
      const actual = trimText(str, 5)
      const expected = 'Hello...'
      expect(actual).toStrictEqual(expected)
    })
    it('should trim string return full string if max chars is greater than total chars', () => {
      const str = 'Hello, I am a long string of text'
      const actual = trimText(str, 200)
      const expected = str
      expect(actual).toStrictEqual(expected)
    })
  })
})

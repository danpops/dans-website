import { fetchDiscogsData } from '@/lib/api'
import { getPageNumbers } from '@/lib/dataUtils'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

export default function useCollection ({ discogsKey = '' }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [paginationInfo, setPaginationInfo] = useState({})
  const [sortKey, setSortKey] = useState('artist')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [myCollection, setMyCollection] = useState([])

  // Derived state
  const totalItems = paginationInfo?.items ?? '???'
  const pageList = getPageNumbers(paginationInfo.pages, currentPage)
  const collectionInfo = `I currently have a total of **${totalItems}** albums in my collection.`

  // Event handler for clicking on a release
  const onClickRelease = release => router.push(`/records/${release.id}`)

  const fetchData = debounce(async (page, key, order) => {
    setLoading(true)
    try {
      const data = await fetchDiscogsData({ discogsKey, page, key, order })
      setMyCollection(data.records)
      setPaginationInfo(data.pagination)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, 500)

  // Event handler for selecting a page
  const onSelectPage = page => {
    const query = { page, key: sortKey, order: sortOrder }
    router.push({ pathname: '/records', query })
  }

  // Event handler for updating sorting
  const onUpdateSorting = key => {
    const order = key !== sortKey ? 'asc' : sortOrder === 'asc' ? 'desc' : 'asc'
    const query = { page: currentPage, key, order }
    router.push({ pathname: '/records', query })
  }

  // Effect to handle changes in page, sortKey, and sortOrder
  useEffect(() => {
    const page = router.query.page ? parseInt(router.query.page) : currentPage
    const key = router.query.key || sortKey
    const order = router.query.order || sortOrder

    setCurrentPage(page)
    setSortKey(key)
    setSortOrder(order)
    setLoading(true)
    fetchData(page, key, order)

    return () => {
      fetchData.cancel()
    }
  }, [
    router.query.page,
    router.query.key,
    router.query.order,
    currentPage,
    sortKey,
    sortOrder
  ])

  // Returned object with public API
  return {
    loading,
    myCollection,
    onSelectPage,
    currentPage,
    paginationInfo,
    pageList,
    collectionInfo,
    onUpdateSorting,
    onClickRelease,
    sorting: { sortKey, sortOrder }
  }
}

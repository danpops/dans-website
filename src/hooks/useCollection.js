import { fetchDiscogsData } from '@/lib/api'
import { getPageNumbers } from '@/lib/dataUtils'
import { useEffect, useState } from 'react'

export default function useCollection ({
  records = [],
  pagination = {},
  discogsKey = ''
}) {
  const [activeRelease, setActiveRelease] = useState(null)
  const [loading, setLoading] = useState(true)
  const [paginationInfo, setPaginationInfo] = useState(pagination)
  const [sortKey, setSortKey] = useState('artist')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [myCollection, setMyCollection] = useState([])

  const pageList = getPageNumbers(paginationInfo.pages, currentPage)
  const collectionInfo = `I currently have a total of **${pagination.items}** albums in my collection.`

  const fetchData = async (page, sort, sortOrder) => {
    await fetchDiscogsData({ discogsKey, page, sort, sortOrder })
      .then(data => {
        setMyCollection(data.records)
        setPaginationInfo(data.pagination)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onClickRelease = release => {
    const value = release === null ? 'unset' : 'hidden'
    document.body.style.overflow = value
    setActiveRelease(release)
  }

  const onCloseRelease = () => onClickRelease(null)

  const onSelectPage = async page => {
    setLoading(true)
    setCurrentPage(page)
    await fetchData(page, sortKey, sortOrder)
  }

  const onUpdateSorting = key => {
    const newKey = key !== sortKey
    const isAscending = sortOrder === 'asc'
    const newOrder = newKey ? 'asc' : isAscending ? 'desc' : 'asc'
    setSortOrder(newOrder)
    setSortKey(key)
  }

  useEffect(() => {
    setMyCollection(records)
    setPaginationInfo(pagination)
    setLoading(false)
  }, [records, pagination])

  useEffect(() => {
    setLoading(true)
    setCurrentPage(1)
    fetchData(1, sortKey, sortOrder)
  }, [sortKey, sortOrder])

  return {
    loading,
    myCollection,
    onSelectPage,
    currentPage,
    paginationInfo,
    pageList,
    collectionInfo,
    onUpdateSorting,
    onCloseRelease,
    onClickRelease,
    activeRelease,
    sorting: { sortKey, sortOrder }
  }
}

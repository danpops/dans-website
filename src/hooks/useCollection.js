import { fetchDiscogsData } from '@/lib/api'
import { getPageNumbers } from '@/lib/dataUtils'
import { useEffect, useState } from 'react'

export default function useCollection ({ records, pagination }) {
  const [loading, setLoading] = useState(true)
  const [paginationInfo, setPaginationInfo] = useState(pagination)
  const [currentPage, setCurrentPage] = useState(1)
  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    setMyCollection(records)
    setPaginationInfo(pagination)
    setLoading(false)
  }, [records, pagination])

  const onSelectPage = async page => {
    setLoading(true)
    setCurrentPage(page)
    await fetchDiscogsData({
      discogsKey: process.env.DISCOGS_KEY ?? '',
      page
    })
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

  const pageList = getPageNumbers(paginationInfo.pages, currentPage)
  const collectionInfo = `I currently have a total of **${pagination.items}** albums in my collection.`

  return {
    loading,
    myCollection,
    onSelectPage,
    currentPage,
    paginationInfo,
    pageList,
    collectionInfo
  }
}

import { fetchDiscogsData } from '@/lib/api'
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

  const onSelectPage = async (type = 'next') => {
    setLoading(true)
    const newPageNumber = type === 'next' ? currentPage + 1 : currentPage - 1
    setCurrentPage(newPageNumber)
    await fetchDiscogsData({
      discogsKey: process.env.DISCOGS_KEY ?? '',
      page: newPageNumber
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

  return { loading, myCollection, onSelectPage, currentPage, paginationInfo }
}

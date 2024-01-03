import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import Pagination from '@/components/Pagination'
import RecordTable from '@/components/RecordTable'
import TableWindow from '@/components/TableWindow'
import { TableContainer } from '@/components/TableWindow/styles'
import { Anchor, TableBodyText } from '@/components/Text'
import { COLLECTION_URL, fetchDiscogsData } from '@/lib/api'
import React, { useEffect, useState } from 'react'

export async function getStaticProps () {
  const id = 'records'
  const title = 'My Record Collection'
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const { records, pagination } = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records, pagination } }
}
export default function RecordsPage ({ title, records, pagination }) {
  const [loading, setLoading] = useState(true)
  const [paginationInfo, setPaginationInfo] = useState(pagination)
  const [currentPage, setCurrentPage] = useState(1)
  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    setMyCollection(records)
    setPaginationInfo(pagination)
    setLoading(false)
  }, [records, pagination])

  const onSelectPage = async e => {
    e.preventDefault()
    setLoading(true)
    const newPageNumber = e.target.value
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

  return (
    <TableWindow id='records-window' title={title}>
      <TableBodyText id='records-info'>{content.records.text}</TableBodyText>
      <TableBodyText id='discogs-collection-link'>
        More info on my{' '}
        <Anchor href={COLLECTION_URL} target='_blank' rel='noopener noreferrer'>
          Discogs
        </Anchor>{' '}
        page.
      </TableBodyText>
      <TableContainer>
        {loading ? <div>getting records</div> : <RecordTable items={myCollection} />}
      </TableContainer>
      <Pagination
        onChange={onSelectPage}
        currentPage={currentPage}
        pages={paginationInfo.pages}
      />
    </TableWindow>
  )
}

RecordsPage.getLayout = getDefaultLayout

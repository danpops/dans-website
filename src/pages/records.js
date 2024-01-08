import Copyright from '@/components/Copyright'
import { getDefaultLayout } from '@/components/Layout'
import Pagination from '@/components/Pagination'
import RecordTable from '@/components/RecordTable'
import TableWindow from '@/components/TableWindow'
import { TableContainer } from '@/components/TableWindow/styles'
import { Anchor, TableBodyText } from '@/components/Text'
import { COLLECTION_URL, fetchDiscogsData } from '@/lib/api'
import React, { useEffect, useState } from 'react'
import { getRecords } from '../../sanity/query'

export async function getServerSideProps () {
  const id = 'records'
  const data = await getRecords()
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const { records, pagination } = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records, pagination, data } }
}
export default function RecordsPage ({ title, records, pagination, data }) {
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

  return (
    <TableWindow id='records-window' title={title}>
      <div>
        <TableBodyText id='records-info'>{data.summary}</TableBodyText>
        <TableBodyText id='discogs-collection-link'>
          More info on my{' '}
          <Anchor
            href={COLLECTION_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Discogs
          </Anchor>{' '}
          page.
        </TableBodyText>
      </div>
      <TableContainer>
        <RecordTable loading={loading} items={myCollection} />
      </TableContainer>
      <Pagination
        onChange={onSelectPage}
        currentPage={currentPage}
        pages={paginationInfo.pages}
      />
      <Copyright />
    </TableWindow>
  )
}

RecordsPage.getLayout = getDefaultLayout

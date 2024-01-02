import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import RecordTable from '@/components/RecordTable'
import TableWindow from '@/components/TableWindow'
import { Anchor, TableBodyText } from '@/components/Text'
import { COLLECTION_URL, fetchDiscogsData } from '@/lib/api'
import React, { useEffect, useState } from 'react'

export async function getStaticProps () {
  const id = 'records'
  const title = 'My Record Collection'
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const records = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records } }
}
export default function RecordsPage ({ title, records }) {
  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    setMyCollection(records)
  }, [records])

  return (
    <TableWindow id='records-window' title={title}>
      <TableBodyText>{content.records.text}</TableBodyText>
      <TableBodyText>
        More info on my{' '}
        <Anchor href={COLLECTION_URL} target='_blank' rel='noopener noreferrer'>
          Discogs
        </Anchor>{' '}
        page.
      </TableBodyText>
      <RecordTable items={myCollection} />
    </TableWindow>
  )
}

RecordsPage.getLayout = getDefaultLayout

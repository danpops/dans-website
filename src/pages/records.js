import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import RecordTable from '@/components/RecordTable'
import { BodyText } from '@/components/Text'
import { COLLECTION_URL, fetchDiscogsData } from '@/lib/api'
import { useEffect, useState } from 'react'

export async function getStaticProps () {
  const id = 'records'
  const title = 'My Record Collection'
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const records = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records } }
}
export default function RecordsPage ({ records }) {
  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    setMyCollection(records)
  }, [records])

  return (
    <ContentContainer>
      <BodyText>Here is a list of all the records in my collection!</BodyText>
      <RecordTable items={myCollection} />
      <BodyText>
        Check out more details on my{' '}
        <a href={COLLECTION_URL} target='_blank' rel='noopener noreferrer'>
          Discogs
        </a>{' '}
        page!
      </BodyText>
    </ContentContainer>
  )
}

RecordsPage.getLayout = getDefaultLayout

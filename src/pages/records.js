import { getDefaultLayout } from '@/components/Layout'
import { fetchDiscogsData } from '@/lib/api'
import useCollection from '@/hooks/useCollection'
import client from '@/cms/client'
import { GET_RECORDS } from '@/cms/queries'
import Records from '@/containers/Records'

export default function RecordsPage ({ title, records, pagination, data }) {
  const collection = useCollection({ records, pagination })
  return (
    <Records
      data={data}
      title={title}
      totalAlbums={pagination.items}
      {...collection}
    />
  )
}
export async function getServerSideProps () {
  const id = 'records'
  const data = await client.fetch(GET_RECORDS)
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const { records, pagination } = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records, pagination, data } }
}

RecordsPage.getLayout = getDefaultLayout

import { getDefaultLayout } from '@/components/Layout'
import RecordInfo from '@/components/RecordInfo'
import TableWindow from '@/components/TableWindow'
import { fetchRelease } from '@/lib/api'
import { useRouter } from 'next/router'

export async function getServerSideProps (ctx) {
  const { id } = ctx.query
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const data = await fetchRelease({ discogsKey, id })
    .then(data => data.releases[0])
    .catch(err => err)
  const title = data?.basic_information.title ?? ''
  const release = { ...data.basic_information, dateAdded: data.date_added }
  return { props: { id, title, release } }
}
export default function RecordPage ({ id, title, release }) {
  const router = useRouter()
  const goBack = () => router.push('/records')

  const openDiscogs = () => {
    window.open(`https://discogs.com/release/${id}`, '_blank')
  }

  return (
    <TableWindow id='records-window' title={title} onExit={goBack}>
      <RecordInfo release={release} onClickImage={openDiscogs} />
    </TableWindow>
  )
}

RecordPage.getLayout = getDefaultLayout

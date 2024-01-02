import { getDefaultLayout } from '@/components/Layout'
import RecordInfo from '@/components/RecordInfo'
import TableWindow from '@/components/TableWindow'
import { fetchRelease } from '@/lib/api'
import { useRouter } from 'next/router'

export async function getServerSideProps (ctx) {
  const { id } = ctx.query
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const release = await fetchRelease({ discogsKey, id })
    .then(data => data)
    .catch(err => err)
  const title = release.title
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

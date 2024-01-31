import { getDefaultLayout } from '@/components/Layout'
import Copyright from '@/components/Layout/Copyright'
import TableWindow from '@/components/Layout/TableWindow'
import ReleaseDetails from '@/components/ReleaseDetails'
import { fetchDiscogsRelease } from '@/lib/api'
import { trimText } from '@/lib/dataUtils'

export async function getServerSideProps (ctx) {
  const { id } = ctx.query
  const onExit = 'back'
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const data = await fetchDiscogsRelease({ discogsKey, id })
  const longTitle = `${data.title} - ${data.artist}`
  const title = trimText(longTitle)
  const pageId = 'release-page'
  return { props: { id: pageId, title, data, onExit } }
}
export default function RecordPage ({ id, title, data, onExit }) {
  return (
    <TableWindow id={id} title={title} onExit={onExit}>
      <ReleaseDetails release={data} />
      <Copyright />
    </TableWindow>
  )
}

RecordPage.getLayout = getDefaultLayout

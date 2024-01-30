import { getWindowLayout } from '@/components/Layout'
import RecordDetail from '@/components/RecordDetail'
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
export default function RecordPage ({ data }) {
  return <RecordDetail release={data} />
}

RecordPage.getLayout = getWindowLayout

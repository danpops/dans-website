import { getDefaultLayout } from '@/components/Layout'
import Copyright from '@/components/Layout/Copyright'
import TableWindow from '@/components/Layout/TableWindow'
import {
  CommunityBar,
  ReleaseHeading,
  ReleaseLink,
  ReleaseTracklist
} from '@/components/ReleaseDetails'
import { ReleaseContent } from '@/components/ReleaseDetails/styles'
import { fetchDiscogsRelease } from '@/lib/api'

export async function getServerSideProps (ctx) {
  const { id } = ctx.query
  const pageId = 'record'
  const onExit = 'back'
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const release = await fetchDiscogsRelease({ discogsKey, id })
  const title = release.title
  return { props: { id: pageId, title, release, onExit, showHomer: false } }
}
export default function RecordPage ({ id, title, release, onExit }) {
  return (
    <TableWindow id={id} title={title} onExit={onExit}>
      <ReleaseContent id='album-details'>
        <ReleaseHeading release={release} />
        <ReleaseTracklist tracklist={release.tracklist} />
        <CommunityBar community={release.community} />
        <ReleaseLink id={release.id} />
      </ReleaseContent>
      <Copyright />
    </TableWindow>
  )
}

RecordPage.getLayout = getDefaultLayout

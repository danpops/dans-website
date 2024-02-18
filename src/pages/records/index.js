import { getWindowLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_RECORDS } from '@/cms/queries'
import useCollection from '@/hooks/useCollection'
import Pagination from '@/components/Pagination'
import Markdown from 'react-markdown'
import { DiscogsContainer } from '@/components/RecordCollection/styles'
import { RecordCollection, RecordSorting } from '@/components/RecordCollection'
import { TableBodyText } from '@/components/Text'

export async function getServerSideProps () {
  const id = 'records'
  const data = await client.fetch(GET_RECORDS)
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  return { props: { id, title, discogsKey, data, homer: false } }
}
export default function DiscogsPage (props) {
  const { discogsKey, data } = props
  const {
    collectionInfo,
    currentPage,
    loading,
    myCollection,
    onClickRelease,
    onSelectPage,
    onUpdateSorting,
    pageList,
    paginationInfo,
    sorting
  } = useCollection({ discogsKey })
  const infoText = `${collectionInfo} ${data.discogsMessage}`
  return (
    <DiscogsContainer>
      <TableBodyText id='records-info'>{data.summary}</TableBodyText>
      <TableBodyText id='discogs-total-albums'>
        <Markdown>{infoText}</Markdown>
      </TableBodyText>
      <RecordSorting sorting={sorting} onUpdateSorting={onUpdateSorting} />
      <RecordCollection
        myCollection={myCollection}
        loading={loading}
        onClickRelease={onClickRelease}
      />
      <Pagination
        onChange={onSelectPage}
        currentPage={currentPage}
        pages={paginationInfo.pages}
        pageList={pageList}
      />
    </DiscogsContainer>
  )
}

DiscogsPage.getLayout = getWindowLayout

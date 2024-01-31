import Markdown from 'react-markdown'
import { getDefaultLayout } from '@/components/Layout'
import Copyright from '@/components/Layout/Copyright'
import TableWindow from '@/components/Layout/TableWindow'
import { TableContainer } from '@/components/Layout/TableWindow/styles'
import Pagination from '@/components/Pagination'
import RecordTable from '@/components/RecordTable'
import { TableBodyText } from '@/components/Text'
import useCollection from '@/hooks/useCollection'
import client from '@/cms/client'
import { GET_RECORDS } from '@/cms/queries'

export async function getStaticProps () {
  const id = 'records'
  const data = await client.fetch(GET_RECORDS)
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  return { props: { id, title, discogsKey, data } }
}
export default function RecordsPage (props) {
  const { title, discogsKey, data } = props
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
    <TableWindow id='records-window' title={title}>
      <div>
        <TableBodyText id='records-info'>{data.summary}</TableBodyText>
        <TableBodyText id='discogs-total-albums'>
          <Markdown>{infoText}</Markdown>
        </TableBodyText>
      </div>
      <TableContainer>
        <RecordTable
          loading={loading}
          items={myCollection}
          onUpdateSorting={onUpdateSorting}
          sorting={sorting}
          onClickRelease={onClickRelease}
        />
      </TableContainer>
      <Pagination
        onChange={onSelectPage}
        currentPage={currentPage}
        pages={paginationInfo.pages}
        pageList={pageList}
      />
      <Copyright />
    </TableWindow>
  )
}

RecordsPage.getLayout = getDefaultLayout

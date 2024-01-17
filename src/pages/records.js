import Markdown from 'react-markdown'
import { getDefaultLayout } from '@/components/Layout'
import Copyright from '@/components/Layout/Copyright'
import TableWindow from '@/components/Layout/TableWindow'
import { TableContainer } from '@/components/Layout/TableWindow/styles'
import Pagination from '@/components/Pagination'
import RecordTable from '@/components/RecordTable'
import { TableBodyText } from '@/components/Text'
import { fetchDiscogsData } from '@/lib/api'
import useCollection from '@/hooks/useCollection'
import client from '@/cms/client'
import { GET_RECORDS } from '@/cms/queries'

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
export default function RecordsPage ({ title, records, pagination, data }) {
  const collection = useCollection({ records, pagination })
  const { collectionInfo, onSelectPage, onUpdateSorting } = collection
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
          loading={collection.loading}
          items={collection.myCollection}
          onUpdateSorting={onUpdateSorting}
          sorting={collection.sorting}
        />
      </TableContainer>
      <Pagination
        onChange={onSelectPage}
        currentPage={collection.currentPage}
        pages={collection.paginationInfo.pages}
        pageList={collection.pageList}
      />
      <Copyright />
    </TableWindow>
  )
}

RecordsPage.getLayout = getDefaultLayout

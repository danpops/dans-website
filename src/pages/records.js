import Copyright from '@/components/Copyright'
import { getDefaultLayout } from '@/components/Layout'
import Pagination from '@/components/Pagination'
import RecordTable from '@/components/RecordTable'
import TableWindow from '@/components/TableWindow'
import { TableContainer } from '@/components/TableWindow/styles'
import { TableBodyText } from '@/components/Text'
import { fetchDiscogsData } from '@/lib/api'
import { querySanity } from '../cms/query'
import useCollection from '@/hooks/useCollection'
import Markdown from 'react-markdown'

export default function RecordsPage ({ title, records, pagination, data }) {
  const { loading, myCollection, onSelectPage, currentPage, paginationInfo } =
    useCollection({ records, pagination })

  return (
    <TableWindow id='records-window' title={title}>
      <div>
        <TableBodyText id='records-info'>{data.summary}</TableBodyText>
        <TableBodyText id='discogs-collection-link'>
          <Markdown>{data.discogsMessage}</Markdown>
        </TableBodyText>
      </div>
      <TableContainer>
        <RecordTable loading={loading} items={myCollection} />
      </TableContainer>
      <Pagination
        onChange={onSelectPage}
        currentPage={currentPage}
        pages={paginationInfo.pages}
      />
      <Copyright />
    </TableWindow>
  )
}
export async function getServerSideProps () {
  const id = 'records'
  const data = await querySanity(
    `*[_type == "records"][0]{
      _id,
      title,
      summary,
      discogsMessage
    }`
  )
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const { records, pagination } = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records, pagination, data } }
}

RecordsPage.getLayout = getDefaultLayout

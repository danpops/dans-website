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
import RecordDetail from '@/components/RecordDetail'
import { useState } from 'react'

export async function getStaticProps () {
  const id = 'records'
  const data = await client.fetch(GET_RECORDS)
  const title = data.title
  const discogsKey = process.env.DISCOGS_KEY ?? ''
  const { records, pagination } = await fetchDiscogsData({ discogsKey })
    .then(data => data)
    .catch(err => err)
  return { props: { id, title, records, discogsKey, pagination, data } }
}
export default function RecordsPage (props) {
  const { title, records, discogsKey, pagination, data } = props
  const [activeRelease, setActiveRelease] = useState(null)
  const collection = useCollection({ records, pagination, discogsKey })
  const { collectionInfo, onSelectPage, onUpdateSorting } = collection
  const infoText = `${collectionInfo} ${data.discogsMessage}`
  const onClickRelease = release => setActiveRelease(release)

  return (
    <TableWindow id='records-window' title={title}>
      {activeRelease && (
        <RecordDetail
          onClose={() => setActiveRelease(null)}
          release={activeRelease}
        />
      )}
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
          onClickRelease={onClickRelease}
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

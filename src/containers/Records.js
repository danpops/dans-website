import Markdown from 'react-markdown'
import TableWindow from '@/components/Layout/TableWindow'
import { TableBodyText } from '@/components/Text'
import { TableContainer } from '@/components/Layout/TableWindow/styles'
import RecordTable from '@/components/RecordTable'
import Pagination from '@/components/Pagination'
import Copyright from '@/components/Layout/Copyright'

export default function Records (props) {
  const {
    data,
    title,
    loading,
    myCollection,
    onSelectPage,
    currentPage,
    paginationInfo,
    pageList,
    totalAlbums
  } = props

  return (
    <TableWindow id='records-window' title={title}>
      <div>
        <TableBodyText id='records-info'>{data.summary}</TableBodyText>
        <TableBodyText id='discogs-collection-link'>
          <Markdown>{data.discogsMessage}</Markdown>
        </TableBodyText>
        <TableBodyText id='total-albums'>
          Total Albums: {totalAlbums}
        </TableBodyText>
      </div>
      <TableContainer>
        <RecordTable loading={loading} items={myCollection} />
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

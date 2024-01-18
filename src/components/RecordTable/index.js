import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableHeaderContainer,
  TableHeaderRow,
  TableRow,
  TableText,
  LoadingContainer,
  HeaderContainer,
  SortChevron
} from './styles'
import Image from 'next/image'
import hourglassGif from 'public/gifs/hourglass.gif'

const RELEASE_URL = 'https://discogs.com/release/'
const TABLE_HEADERS = ['Artist', 'Title']
export default function RecordTable (props) {
  const { loading, items, onUpdateSorting, sorting } = props
  const openDiscogsPage = id => () => {
    window.open(`${RELEASE_URL}${id}`, '_blank')
  }
  if (loading) {
    return (
      <LoadingContainer>
        <Image src={hourglassGif} alt='loading hourglass' width={40} />
      </LoadingContainer>
    )
  }
  return (
    <Table id='records-table'>
      <TableHead>
        <TableHeaderRow>
          {TABLE_HEADERS.map((header, index) => (
            <TableHeader
              key={index}
              label={header}
              onUpdateSorting={onUpdateSorting}
              sorting={sorting}
            />
          ))}
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {items?.map(item => (
          <TableRow key={item.id} onClick={openDiscogsPage(item.id)}>
            <TableCell>
              <TableText>{item.artist}</TableText>
            </TableCell>
            <TableCell>
              <TableText>{item.title}</TableText>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
function TableHeader (props) {
  const { label, onUpdateSorting, sorting } = props
  const sortKey = label.toLowerCase()
  const isActive = sortKey === sorting.sortKey
  const onSort = () => onUpdateSorting(sortKey)

  return (
    <TableHeaderContainer onClick={onSort}>
      <HeaderContainer>
        <span>{label}</span>
        {isActive && <SortChevron order={sorting.sortOrder} />}
      </HeaderContainer>
    </TableHeaderContainer>
  )
}

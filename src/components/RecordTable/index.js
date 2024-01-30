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

const TABLE_HEADERS = ['Artist', 'Title', 'Added']
export default function RecordTable (props) {
  const { loading, items, onUpdateSorting, sorting, onClickRelease } = props
  const onClickRow = release => () => onClickRelease(release)
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
        {items?.map(release => (
          <AlbumRelease
            key={release.id}
            release={release}
            onClick={onClickRow}
          />
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
function AlbumRelease ({ release, onClick }) {
  return (
    <TableRow onClick={onClick(release)}>
      <TableCell>
        <TableText>{release.artist}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{release.title}</TableText>
      </TableCell>
      <TableCell>
        <TableText>{release.dateAdded}</TableText>
      </TableCell>
    </TableRow>
  )
}

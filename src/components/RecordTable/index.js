import {
  TableBody,
  TableHead,
  HeaderContainer,
  TableHeaderRow,
  SortChevron,
  TableText
} from '@/components/Table'
import {
  RecordTableContainer,
  LoadingContainer,
  RecordsCell,
  RecordsHeader,
  RecordRow
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
    <RecordTableContainer id='records-table'>
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
          <AlbumReleaseRow
            key={release.id}
            release={release}
            onClick={onClickRow}
          />
        ))}
      </TableBody>
    </RecordTableContainer>
  )
}
function TableHeader (props) {
  const { label, onUpdateSorting, sorting } = props
  const sortKey = label.toLowerCase()
  const isActive = sortKey === sorting.sortKey
  const onSort = () => onUpdateSorting(sortKey)

  return (
    <RecordsHeader onClick={onSort}>
      <HeaderContainer>
        <span>{label}</span>
        {isActive && <SortChevron order={sorting.sortOrder} />}
      </HeaderContainer>
    </RecordsHeader>
  )
}
function AlbumReleaseRow ({ release, onClick }) {
  return (
    <RecordRow id='album-release-row' onClick={onClick(release)}>
      <RecordsCell>
        <TableText>{release.artist}</TableText>
      </RecordsCell>
      <RecordsCell>
        <TableText>{release.title}</TableText>
      </RecordsCell>
      <RecordsCell>
        <TableText>{release.dateAdded}</TableText>
      </RecordsCell>
    </RecordRow>
  )
}

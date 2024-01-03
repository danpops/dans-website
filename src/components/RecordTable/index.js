import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableText
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'
export default function RecordTable ({ items }) {
  const openDiscogsPage = id => () => {
    window.open(`${RELEASE_URL}${id}`, '_blank')
  }
  return (
    <Table id='records-table'>
      <TableHead>
        <TableHeaderRow>
          <TableHeader>Artist</TableHeader>
          <TableHeader>Title</TableHeader>
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

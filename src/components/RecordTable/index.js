import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderRow,
  TableRow,
  TableText,
  TableBody,
  TableHeader,
  TableScroll
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'
export default function RecordTable ({ items }) {
  const openDiscogsPage = id => () => {
    window.open(`${RELEASE_URL}${id}`, '_blank')
  }
  return (
    <TableContainer>
      <TableScroll>
        <Table>
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
      </TableScroll>
    </TableContainer>
  )
}

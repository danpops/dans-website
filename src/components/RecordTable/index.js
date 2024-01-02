import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
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
    <TableContainer>
      <Table>
        <thead>
          <TableHeaderRow>
            <TableHead>Artist</TableHead>
            <TableHead>Title</TableHead>
          </TableHeaderRow>
        </thead>
        <tbody style={{ borderCollapse: 'collapse' }}>
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
        </tbody>
      </Table>
    </TableContainer>
  )
}

import { useRouter } from 'next/router'
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

export default function RecordTable ({ items }) {
  const router = useRouter()
  const openDiscogsPage = id => () => {
    router.push(`/records/${id}`)
  }
  return (
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
  )
}

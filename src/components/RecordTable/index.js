import { useRouter } from 'next/router'
import {
  AlignedTable,
  BodyTableContainer,
  TableContainer,
  StickyTableHeader,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableText
} from './styles'

export default function RecordTable ({ items }) {
  const router = useRouter()
  const openDiscogsPage = id => () => {
    router.push(`/records/${id}`)
  }
  return (
    <TableContainer>
      <StickyTableHeader>
        <AlignedTable>
          <thead>
            <tr>
              <TableHeader>Artist</TableHeader>
              <TableHeader>Title</TableHeader>
            </tr>
          </thead>
        </AlignedTable>
      </StickyTableHeader>
      <BodyTableContainer>
        <AlignedTable>
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
        </AlignedTable>
      </BodyTableContainer>
    </TableContainer>
  )
}

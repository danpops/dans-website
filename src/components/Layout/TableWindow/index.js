import WindowHeader from '../WindowHeader'
import { TableWindowBody, TableWindowWrapper } from './styles'

export default function TableWindow ({ id, title, children }) {
  return (
    <TableWindowWrapper id={id}>
      <WindowHeader id={id} title={title} />
      <TableWindowBody>{children}</TableWindowBody>
    </TableWindowWrapper>
  )
}

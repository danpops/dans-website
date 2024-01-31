import WindowHeader from '../WindowHeader'
import { TableWindowBody, TableWindowWrapper } from './styles'

export default function TableWindow ({ id, title, onExit = 'home', children }) {
  return (
    <TableWindowWrapper id={id}>
      <WindowHeader id={id} title={title} onExit={onExit} />
      <TableWindowBody>{children}</TableWindowBody>
    </TableWindowWrapper>
  )
}

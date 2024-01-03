import HomeButton from '../HomeButton'
import { WindowHeader, WindowTitle } from '../PageWindow/styles'
import { TableWindowBody, TableWindowWrapper } from './styles'

export default function TableWindow ({ id, onExit = null, title, children }) {
  return (
    <TableWindowWrapper>
      <WindowHeader>
        <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
        <HomeButton onClick={onExit} />
      </WindowHeader>
      <TableWindowBody>{children}</TableWindowBody>
    </TableWindowWrapper>
  )
}

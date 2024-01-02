import HomeButton from '../HomeButton'
import { WindowHeader, WindowTitle } from '../PageWindow/styles'
import { TableContainer, TableWindowBody, TableWindowWrapper } from './styles'

export default function TableWindow ({ id, title, children }) {
  return (
    <TableWindowWrapper>
      <WindowHeader>
        <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
        <HomeButton />
      </WindowHeader>
      <TableWindowBody>
        <TableContainer>{children}</TableContainer>
      </TableWindowBody>
    </TableWindowWrapper>
  )
}

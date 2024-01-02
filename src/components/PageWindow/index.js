import Copyright from '../Copyright'
import HomeButton from '../HomeButton'
import { WindowContainer } from '../Layout/styles'
import { WindowTitle, WindowBody, WindowHeader } from './styles'

export default function PageWindow ({ children, id, title }) {
  return (
    <WindowContainer id={`${id}-window`}>
      <WindowHeader>
        <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
        <HomeButton />
      </WindowHeader>
      <WindowBody>
        {children}
        <Copyright />
      </WindowBody>
    </WindowContainer>
  )
}

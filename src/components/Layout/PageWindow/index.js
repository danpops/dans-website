import Copyright from '../Copyright'
import WindowHeader from '../WindowHeader'
import { WindowContainer } from '../styles'
import { WindowBody } from './styles'

export default function PageWindow ({
  children,
  id,
  title,
  onExit = 'home',
  showCopyright = true
}) {
  return (
    <WindowContainer id={`${id}-window`}>
      <WindowHeader id={id} title={title} onExit={onExit} />
      <WindowBody>
        {children}
        {showCopyright && <Copyright />}
      </WindowBody>
    </WindowContainer>
  )
}

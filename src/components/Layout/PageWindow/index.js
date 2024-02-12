import Copyright from '../Copyright'
import WindowHeader from '../WindowHeader'
import { WindowContainer } from '../styles'
import { WindowBody } from './styles'

export default function PageWindow ({
  children,
  id,
  title,
  onExit = 'home',
  copyright = true
}) {
  return (
    <WindowContainer id={`${id}-window`}>
      <WindowHeader id={id} title={title} onExit={onExit} />
      <WindowBody>
        {children}
        {copyright && <Copyright />}
      </WindowBody>
    </WindowContainer>
  )
}

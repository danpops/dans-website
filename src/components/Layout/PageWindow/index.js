import Copyright from '../Copyright'
import WindowHeader from '../WindowHeader'
import { WindowContainer } from '../styles'
import { WindowBody } from './styles'

export default function PageWindow ({ children, id, title }) {
  return (
    <WindowContainer id={`${id}-window`}>
      <WindowHeader id={id} title={title} />
      <WindowBody>
        {children}
        <Copyright />
      </WindowBody>
    </WindowContainer>
  )
}

import { useRouter } from 'next/router'
import {
  CloseButtonContainer,
  WindowHeaderContainer,
  WindowTitle
} from './styles'

export default function WindowHeader ({ id, title, onExit = null }) {
  const router = useRouter()
  const goHome = () => router.push('/')

  const onClickExit = () => (onExit !== null ? onExit() : goHome())

  return (
    <WindowHeaderContainer>
      <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
      <CloseButtonContainer id='home-button' onClick={onClickExit}>
        x
      </CloseButtonContainer>
    </WindowHeaderContainer>
  )
}

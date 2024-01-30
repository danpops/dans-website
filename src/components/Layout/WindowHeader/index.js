import { useRouter } from 'next/router'
import {
  CloseButtonContainer,
  WindowHeaderContainer,
  WindowTitle
} from './styles'

export default function WindowHeader ({ id, title, onExit = 'home' }) {
  const router = useRouter()
  const goHome = () => router.push('/')
  const goBack = () => router.back()

  const onClickExit = () => (onExit === 'home' ? goHome() : goBack())

  return (
    <WindowHeaderContainer>
      <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
      <CloseButtonContainer id='home-button' onClick={onClickExit}>
        x
      </CloseButtonContainer>
    </WindowHeaderContainer>
  )
}

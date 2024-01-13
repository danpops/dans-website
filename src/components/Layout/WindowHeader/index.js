import { useRouter } from 'next/router'
import {
  CloseButtonContainer,
  WindowHeaderContainer,
  WindowTitle
} from './styles'

export default function WindowHeader ({ id, title }) {
  const router = useRouter()
  const goHome = () => router.push('/')

  return (
    <WindowHeaderContainer>
      <WindowTitle id={`${id}-title`}>{title}</WindowTitle>
      <CloseButtonContainer id='home-button' onClick={goHome}>
        x
      </CloseButtonContainer>
    </WindowHeaderContainer>
  )
}

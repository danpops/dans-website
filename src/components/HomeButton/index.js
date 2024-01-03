import { useRouter } from 'next/router'
import { HomeButtonContainer } from './styles'

export default function HomeButton ({ onClick = null }) {
  const router = useRouter()
  const goHome = () => router.push('/')

  const onClickButton = onClick === null ? goHome : onClick

  return (
    <HomeButtonContainer id='home-button' onClick={onClickButton}>
      x
    </HomeButtonContainer>
  )
}

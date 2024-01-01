import { useRouter } from 'next/router'
import { HomeButtonContainer } from './styles'

export default function HomeButton () {
  const router = useRouter()
  const goHome = () => router.push('/')

  return (
    <HomeButtonContainer id='home-button' onClick={goHome}>
      x
    </HomeButtonContainer>
  )
}

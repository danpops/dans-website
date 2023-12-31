import Image from 'next/image'
import { useRouter } from 'next/router'
import homeButtonGif from '@/assets/gifs/back-home.gif'
import { HomeButtonContainer } from './styles'

export default function HomeButton () {
  const router = useRouter()
  const goHome = () => router.push('/')

  return (
    <HomeButtonContainer id='home-button'>
      <Image src={homeButtonGif} alt='gif button' onClick={goHome} />
    </HomeButtonContainer>
  )
}

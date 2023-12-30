import Image from 'next/image'
import { useRouter } from 'next/router'
import backHome from '@/assets/gifs/back-home.gif'
import { HomeButtonContainer } from './styles'

export default function HomeButton () {
  const router = useRouter()
  const goBack = () => router.push('/')

  return (
    <HomeButtonContainer id='home-button'>
      <Image src={backHome} alt='back home gif' onClick={goBack} />
    </HomeButtonContainer>
  )
}

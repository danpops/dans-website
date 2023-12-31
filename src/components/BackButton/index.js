import Image from 'next/image'
import { useRouter } from 'next/router'
import backHomeGif from '@/assets/gifs/back-home.gif'
import { BackButtonContainer } from './styles'

export default function BackButton () {
  const router = useRouter()
  const goBack = () => router.push('/')

  return (
    <BackButtonContainer id='home-button'>
      <Image src={backHomeGif} alt='gif button' onClick={goBack} />
    </BackButtonContainer>
  )
}

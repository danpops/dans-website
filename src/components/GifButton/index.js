import Image from 'next/image'
import { useRouter } from 'next/router'
import backHomeGif from '@/assets/gifs/back-home.gif'
import { GifButtonContainer } from './styles'

export default function GifButton () {
  const router = useRouter()
  const goBack = () => router.push('/')

  return (
    <GifButtonContainer id='home-button'>
      <Image src={backHomeGif} alt='gif button' onClick={goBack} />
    </GifButtonContainer>
  )
}

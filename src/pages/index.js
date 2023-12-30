import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import HeroBanner from '@/components/HeroBanner'
import { GifButtonContainer } from '@/components/GifButton/styles'
import Image from 'next/image'
import homerGif from '@/assets/gifs/homer.gif'

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <HeroBanner />
      <GifButtonContainer>
        <Image src={homerGif} alt='homer gif' width={200} />
      </GifButtonContainer>
    </ContentContainer>
  )
}

LandingPage.getLayout = getDefaultLayout

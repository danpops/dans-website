import { content } from '@/assets/data/content'
import GifButton from '@/components/GifButton'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { BodyText, Heading2 } from '@/components/Text'
import Image from 'next/image'
import computerGif from '@/assets/gifs/computer.gif'

export default function AboutPage () {
  return (
    <ContentContainer id='about'>
      <SectionContainer id='about-section'>
        <Heading2 id='about-title'>{content.about.title}</Heading2>
        <Image src={computerGif} alt='computer gif' width={150} />
        <BodyText id='about-text'>{content.about.text}</BodyText>
        <GifButton />
      </SectionContainer>
    </ContentContainer>
  )
}

AboutPage.getLayout = getDefaultLayout

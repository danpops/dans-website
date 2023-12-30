import { content } from '@/assets/data/content'
import Image from 'next/image'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { Heading1, Heading3 } from '@/components/Text'
import codeGif from '@/assets/gifs/code.gif'
import styled from 'styled-components'
import { colors } from '@/design/colors'

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: ${colors.yellow};
`

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <SectionContainer id='hero-section' style={{ textAlign: 'center' }}>
        <TitleContainer>
          <Image src={codeGif} alt='code gif' />
          <Heading1 id='hero-title'>{content.hero.title}</Heading1>
          <Image src={codeGif} alt='code gif' />
        </TitleContainer>
        <Heading3 id='hero-subtitle'>{content.hero.subtitle}</Heading3>
      </SectionContainer>
    </ContentContainer>
  )
}

LandingPage.getLayout = getDefaultLayout

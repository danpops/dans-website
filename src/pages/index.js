import { content } from '@/assets/data/content'
import Image from 'next/image'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { Heading1, Heading3 } from '@/components/Text'
import codeGif from '@/assets/gifs/code.gif'
import welcomeGif from '@/assets/gifs/mywelcome.gif'
import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: ${colors.yellow};
  margin-top: 1rem;
`
const WelcomeImg = styled(Image)`
  width: 15rem;
  height: 5rem;

  @media ${devices.md} {
    width: 22rem;
    height: 8rem;
  }
  @media ${devices.lg} {
    width: 30rem;
    height: 10rem;
  }
`

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <SectionContainer
        id='hero-section'
        style={{ justifyItems: 'center', textAlign: 'center' }}
      >
        <WelcomeImg src={welcomeGif} alt='welcome gif' />
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

import { content } from '@/assets/data/content'
import Image from 'next/image'
import codeGif from '@/assets/gifs/code.gif'
import welcomeGif from '@/assets/gifs/mywelcome.gif'
import {
  HeroContainer,
  HeroTitle,
  MatrixGif,
  TitleContainer,
  WelcomeImg
} from './styles'
import contactGif from '@/assets/gifs/contact.gif'
import { HomeButtonContainer } from '@/components/HomeButton/styles'
import { useRouter } from 'next/router'
import { Heading3 } from '../Text'

export default function HeroBanner () {
  const router = useRouter()
  const goToContact = () => router.push('/contact')

  return (
    <HeroContainer id='hero-section'>
      <WelcomeImg src={welcomeGif} alt='welcome gif' />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif src={codeGif} alt='code gif' />
        <HeroTitle id='hero-title'>{content.hero.title}</HeroTitle>
        <MatrixGif src={codeGif} alt='code gif' />
      </TitleContainer>
      <HomeButtonContainer onClick={goToContact}>
        <Image src={contactGif} alt='contact gif' width={150} />
      </HomeButtonContainer>
    </HeroContainer>
  )
}

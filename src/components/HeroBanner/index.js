import { useRouter } from 'next/router'
import { content } from '@/assets/data/content'
import codeGif from '@/assets/gifs/code.gif'
import contactGif from '@/assets/gifs/contact.gif'
import welcomeGif from '@/assets/gifs/mywelcome.gif'
import { Heading3 } from '../Text'
import {
  ContactImage,
  HeroContainer,
  HeroTitle,
  MatrixGif,
  TitleContainer,
  WelcomeImg
} from './styles'

export default function HeroBanner () {
  const router = useRouter()
  const goToContact = () => router.push('/contact')

  return (
    <HeroContainer id='hero-window'>
      <WelcomeImg src={welcomeGif} alt='welcome gif' />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif src={codeGif} alt='code gif' />
        <HeroTitle id='hero-title'>{content.hero.title}</HeroTitle>
        <MatrixGif src={codeGif} alt='code gif' />
      </TitleContainer>
      <ContactImage
        src={contactGif}
        alt='contact gif'
        width={150}
        onClick={goToContact}
      />
    </HeroContainer>
  )
}

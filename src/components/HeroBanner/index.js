import { useRouter } from 'next/router'
import { content } from '@/assets/data/content'
import aboutGif from 'public/gifs/about.gif'
import codeGif from 'public/gifs/code.gif'
import contactGif from 'public/gifs/contact.gif'
import welcomeGif from 'public/gifs/mywelcome.gif'
import { Heading3 } from '../Text'
import {
  FireImage,
  HeroContainer,
  HeroTitle,
  MatrixGif,
  TitleContainer,
  WelcomeImg,
  LinkContainer
} from './styles'
import Copyright from '../Copyright'

export default function HeroBanner () {
  const router = useRouter()

  const goToAbout = () => router.push('/about')
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
      <LinkContainer>
        <FireImage
          src={aboutGif}
          alt='about gif'
          width={95}
          onClick={goToAbout}
        />
        <FireImage
          src={contactGif}
          alt='contact gif'
          width={120}
          onClick={goToContact}
        />
      </LinkContainer>
      <Copyright />
    </HeroContainer>
  )
}

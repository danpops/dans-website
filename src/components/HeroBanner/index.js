import { useRouter } from 'next/router'
import aboutGif from 'public/gifs/about.gif'
import contactGif from 'public/gifs/contact.gif'
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

export default function HeroBanner ({ title, welcomeGif, iconGif }) {
  const router = useRouter()

  const goToAbout = () => router.push('/about')
  const goToContact = () => router.push('/contact')

  return (
    <HeroContainer id='hero-window'>
      <WelcomeImg
        src={welcomeGif.image}
        alt={welcomeGif.alt}
        width={150}
        height={100}
      />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif
          src={iconGif.image}
          alt={iconGif.alt}
          width={50}
          height={50}
        />
        <HeroTitle id='hero-title'>{title}</HeroTitle>
        <MatrixGif
          src={iconGif.image}
          alt={iconGif.alt}
          width={50}
          height={50}
        />
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

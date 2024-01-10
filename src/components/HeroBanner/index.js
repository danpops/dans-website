import { useRouter } from 'next/router'
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

export default function HeroBanner (props) {
  const router = useRouter()
  const { title, welcomeGif, iconGif, aboutLinkGif, contactLinkGif } = props
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
          src={aboutLinkGif.image}
          alt={aboutLinkGif.alt}
          width={95}
          height={30}
          onClick={goToAbout}
        />
        <FireImage
          src={contactLinkGif.image}
          alt={contactLinkGif.alt}
          width={120}
          height={30}
          onClick={goToContact}
        />
      </LinkContainer>
      <Copyright />
    </HeroContainer>
  )
}

import Copyright from '@/components/Copyright'
import {
  LinkImage,
  HeroContainer,
  HeroTitle,
  LinkContainer,
  MatrixGif,
  TitleContainer,
  WelcomeImg
} from '@/components/HeroBanner'
import { Heading3 } from '@/components/Text'

export default function Landing (props) {
  const { data, goToAbout, goToContact, isDarkMode } = props
  return (
    <HeroContainer id='hero-window'>
      <WelcomeImg
        src={data.welcomeGif.image}
        alt={data.welcomeGif.alt}
        width={150}
        height={100}
        $inverted={isDarkMode}
      />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
          $inverted={isDarkMode}
        />
        <HeroTitle id='hero-title'>{data.title}</HeroTitle>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
          $inverted={isDarkMode}
        />
      </TitleContainer>
      <LinkContainer>
        <LinkImage
          src={data.aboutLinkGif.image}
          alt={data.aboutLinkGif.alt}
          width={95}
          height={30}
          onClick={goToAbout}
          $inverted={isDarkMode}
        />
        <LinkImage
          src={data.contactLinkGif.image}
          alt={data.contactLinkGif.alt}
          width={120}
          height={30}
          onClick={goToContact}
          $inverted={isDarkMode}
        />
      </LinkContainer>
      <Copyright />
    </HeroContainer>
  )
}

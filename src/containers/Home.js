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
import { useTheme } from '@/components/ThemeProvider'

export default function Home ({ data, goToAbout, goToContact }) {
  const { themeMode } = useTheme()
  const inverted = themeMode === 'dark'

  return (
    <HeroContainer id='hero-window'>
      <WelcomeImg
        src={data.welcomeGif.image}
        alt={data.welcomeGif.alt}
        width={150}
        height={100}
        inverted={inverted}
      />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
          inverted={inverted}
        />
        <HeroTitle id='hero-title'>{data.title}</HeroTitle>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
          inverted={inverted}
        />
      </TitleContainer>
      <LinkContainer>
        <LinkImage
          src={data.aboutLinkGif.image}
          alt={data.aboutLinkGif.alt}
          width={95}
          height={30}
          onClick={goToAbout}
          inverted={inverted}
        />
        <LinkImage
          src={data.contactLinkGif.image}
          alt={data.contactLinkGif.alt}
          width={120}
          height={30}
          onClick={goToContact}
          inverted={inverted}
        />
      </LinkContainer>
      <Copyright />
    </HeroContainer>
  )
}

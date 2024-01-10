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

export default function Home ({ data, goToAbout, goToContact }) {
  return (
    <HeroContainer id='hero-window'>
      <WelcomeImg
        src={data.welcomeGif.image}
        alt={data.welcomeGif.alt}
        width={150}
        height={100}
      />
      <Heading3 style={{ margin: 0 }}>to</Heading3>
      <TitleContainer>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
        />
        <HeroTitle id='hero-title'>{data.title}</HeroTitle>
        <MatrixGif
          src={data.iconGif.image}
          alt={data.iconGif.alt}
          width={50}
          height={50}
        />
      </TitleContainer>
      <LinkContainer>
        <LinkImage
          src={data.aboutLinkGif.image}
          alt={data.aboutLinkGif.alt}
          width={95}
          height={30}
          onClick={goToAbout}
        />
        <LinkImage
          src={data.contactLinkGif.image}
          alt={data.contactLinkGif.alt}
          width={120}
          height={30}
          onClick={goToContact}
        />
      </LinkContainer>
      <Copyright />
    </HeroContainer>
  )
}

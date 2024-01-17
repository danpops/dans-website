import Copyright from '@/components/Layout/Copyright'
import {
  LinkImage,
  HeroContainer,
  HeroTitle,
  LinkContainer,
  MatrixGif,
  TitleContainer,
  WelcomeImg,
  ResumeLink
} from '@/components/HeroBanner'
import { getHeroLayout } from '@/components/Layout'
import { Heading3 } from '@/components/Text'
import client from '@/cms/client'
import { GET_LANDING } from '@/cms/queries'
import { useRouter } from 'next/router'
import { useTheme } from '@/components/Layout/ThemeProvider'

export async function getStaticProps () {
  const id = 'landing'
  const data = await client.fetch(GET_LANDING)
  return { props: { id, data } }
}
export default function LandingPage ({ data }) {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const goToAbout = () => router.push('/about')
  const goToContact = () => router.push('/contact')
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
          id='about-link'
          src={data.aboutLinkGif.image}
          alt={data.aboutLinkGif.alt}
          width={95}
          height={30}
          onClick={goToAbout}
          $inverted={isDarkMode}
        />
        <LinkImage
          id='contact-link'
          src={data.contactLinkGif.image}
          alt={data.contactLinkGif.alt}
          width={120}
          height={30}
          onClick={goToContact}
          $inverted={isDarkMode}
        />
      </LinkContainer>
      <ResumeLink
        id='resume-link'
        target='_blank'
        rel='noopener noreferrer'
        href={`${data.resumeURL}`}
      >
        Resume
      </ResumeLink>
      <Copyright />
    </HeroContainer>
  )
}

LandingPage.getLayout = getHeroLayout

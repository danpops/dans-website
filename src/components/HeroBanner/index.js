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
} from '@/components/HeroBanner/styles'
import { Anchor, Heading3 } from '@/components/Text'
import Typewriter from '../Typewriter'
import { LinkText } from '../ReleaseDetails/styles'

export default function HeroBanner (props) {
  const { data, isDarkMode, goToAbout, goToContact, goToSynth } = props
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
      <Typewriter content={data.typewriterText} />
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
        href={data.resumeURL}
      >
        Resume
      </ResumeLink>
      <LinkText id='synth-link'>
        Check out{' '}
        <Anchor style={{ cursor: 'pointer' }} onClick={goToSynth}>
          this synth
        </Anchor>{' '}
        I am building!
      </LinkText>
      <Copyright />
    </HeroContainer>
  )
}

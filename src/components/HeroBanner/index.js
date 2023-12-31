import { content } from '@/assets/data/content'
import Image from 'next/image'
import codeGif from '@/assets/gifs/code.gif'
import welcomeGif from '@/assets/gifs/mywelcome.gif'
import { HeroContainer, HeroTitle, TitleContainer, WelcomeImg } from './styles'
import contactGif from '@/assets/gifs/contact.gif'
import { BackButtonContainer } from '@/components/BackButton/styles'
import { useRouter } from 'next/router'
import { Heading3 } from '../Text'

export default function HeroBanner () {
  const router = useRouter()
  const goToContact = () => router.push('/contact')

  return (
    <HeroContainer id='hero-section'>
      <WelcomeImg src={welcomeGif} alt='welcome gif' />
      <Heading3>to</Heading3>
      <TitleContainer>
        <Image src={codeGif} alt='code gif' />
        <HeroTitle id='hero-title'>{content.hero.title}</HeroTitle>
        <Image src={codeGif} alt='code gif' />
      </TitleContainer>
      <BackButtonContainer onClick={goToContact}>
        <Image src={contactGif} alt='contact gif' width={150} />
      </BackButtonContainer>
    </HeroContainer>
  )
}

import { content } from '@/assets/data/content'
import Image from 'next/image'
import { Heading1, Heading3 } from '@/components/Text'
import codeGif from '@/assets/gifs/code.gif'
import welcomeGif from '@/assets/gifs/mywelcome.gif'
import { HeroContainer, TitleContainer, WelcomeImg } from './styles'
import contactGif from '@/assets/gifs/contact.gif'
import { GifButtonContainer } from '@/components/GifButton/styles'
import { useRouter } from 'next/router'

export default function HeroBanner () {
  const router = useRouter()
  const goToContact = () => router.push('/contact')

  return (
    <HeroContainer id='hero-section'>
      <WelcomeImg src={welcomeGif} alt='welcome gif' />
      <TitleContainer>
        <Image src={codeGif} alt='code gif' />
        <Heading1 id='hero-title'>{content.hero.title}</Heading1>
        <Image src={codeGif} alt='code gif' />
      </TitleContainer>
      <Heading3 id='hero-subtitle'>{content.hero.subtitle}</Heading3>
      <GifButtonContainer onClick={goToContact}>
        <Image src={contactGif} alt='contact gif' width={200} />
      </GifButtonContainer>
    </HeroContainer>
  )
}

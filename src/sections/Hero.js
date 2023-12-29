import { SectionContainer } from '@/components/Layout/styles'
import { content } from '@/assets/data/content'
import { Heading1, Heading3 } from '@/components/Text'

export default function HeroSection () {
  return (
    <SectionContainer id='hero'>
      <div>
        <Heading1 id='hero-title'>{content.hero.title}</Heading1>
        <Heading3 id='hero-subtitle'>{content.hero.subtitle}</Heading3>
      </div>
    </SectionContainer>
  )
}

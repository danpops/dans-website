import { content } from '@/assets/data/content'
import ContactSection from '@/components/ContactSection'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { Heading1, Heading3 } from '@/components/Text'

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <SectionContainer id='hero-section'>
        <Heading1 id='hero-title'>{content.hero.title}</Heading1>
        <Heading3 id='hero-subtitle'>{content.hero.subtitle}</Heading3>
      </SectionContainer>
      <ContactSection />
    </ContentContainer>
  )
}

LandingPage.getLayout = getDefaultLayout

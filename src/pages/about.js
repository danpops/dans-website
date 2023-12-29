import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { BodyText, Heading2 } from '@/components/Text'

export default function AboutPage () {
  return (
    <ContentContainer id='about'>
      <SectionContainer id='about-section'>
        <Heading2 id='about-title'>{content.about.title}</Heading2>
        <BodyText id='about-text'>{content.about.text}</BodyText>
      </SectionContainer>
    </ContentContainer>
  )
}

AboutPage.getLayout = getDefaultLayout

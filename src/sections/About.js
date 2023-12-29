import { content } from '@/assets/data/content'
import { SectionContainer } from '../components/Layout/styles'
import { BodyText, Heading2 } from '../components/Text'

export default function AboutSection () {
  return (
    <SectionContainer id='about-section'>
      <div>
        <Heading2 id='about-title'>{content.about.title}</Heading2>
        <BodyText id='about-text'>{content.about.text}</BodyText>
      </div>
    </SectionContainer>
  )
}

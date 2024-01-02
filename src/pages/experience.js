import { content } from '@/assets/data/content'
import ExperienceCard from '@/components/ExperienceCard'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'

export function getStaticProps () {
  const id = 'experience'
  const title = content.experience.title
  return { props: { id, title } }
}
export default function ExperiencePage () {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{content.experience.text}</BodyText>
      {content.experience.cards.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getWindowLayout

import { content } from '@/assets/data/content'
import ExperienceCard from '@/components/ExperienceCard'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'

export function getStaticProps () {
  const id = 'experience'
  const title = content.experience.title
  return { props: { id, title } }
}
export default function ExperiencePage () {
  return (
    <ContentContainer>
      {content.experience.cards.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getDefaultLayout

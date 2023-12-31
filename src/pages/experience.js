import { content } from '@/assets/data/content'
import ExperienceCard from '@/components/ExperienceCard'
import { getDefaultLayout } from '@/components/Layout'

export function getStaticProps () {
  const id = 'experience'
  const title = content.experience.title
  return { props: { id, title, showBack: true } }
}
export default function ExperiencePage () {
  return content.experience.cards.map((item, index) => (
    <ExperienceCard key={index} item={item} />
  ))
}

ExperiencePage.getLayout = getDefaultLayout

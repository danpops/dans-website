import ExperienceCard from '@/components/ExperienceCard'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'
import { getExperience } from '../../sanity/query'

export async function getServerSideProps () {
  const id = 'experience'
  const data = await getExperience()
  const title = data.title
  return { props: { id, title, data } }
}
export default function ExperiencePage ({ data }) {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      {data.cards.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getWindowLayout

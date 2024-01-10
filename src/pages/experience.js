import ExperienceCard from '@/components/ExperienceCard'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'
import { querySanity } from '../cms/query'

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
export async function getServerSideProps () {
  const id = 'experience'
  const data = await querySanity(
    `*[_type == "experience"][0]{
      _id,
      title,
      summary,
      'cards': cards[] {
        company,
        logo {alt, "image": asset->url},
        title,
        date,
        notes
      }
    }`
  )
  const title = data.title
  return { props: { id, title, data } }
}

ExperiencePage.getLayout = getWindowLayout

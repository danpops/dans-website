import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'
import { querySanity } from '../../sanity/query'

export default function SpecialtiesPage ({ data }) {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      <ListBox
        id='specialty-items'
        listId='specialty-item'
        items={data.specialtyLinks}
      />
    </ContentContainer>
  )
}
export async function getServerSideProps () {
  const id = 'specialties'
  const data = await querySanity(
    `*[_type == "specialties"]{
      _id,
      title,
      summary,
      specialtyLinks
    }`
  )
  const title = data.title
  return { props: { id, title, data } }
}

SpecialtiesPage.getLayout = getWindowLayout

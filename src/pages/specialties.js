import client from '@/cms/client'
import { GET_SPECIALTIES } from '@/cms/queries'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'

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
export async function getStaticProps () {
  const id = 'specialties'
  const data = await client.fetch(GET_SPECIALTIES)
  const title = data.title
  return { props: { id, title, data } }
}

SpecialtiesPage.getLayout = getWindowLayout

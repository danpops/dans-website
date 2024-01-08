import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'
import { getSpecialties } from '../../sanity/query'

export async function getServerSideProps () {
  const id = 'specialties'
  const data = await getSpecialties()
  const title = data.title
  return { props: { id, title, data } }
}
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

SpecialtiesPage.getLayout = getWindowLayout

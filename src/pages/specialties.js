import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'

export function getStaticProps () {
  const id = 'specialties'
  const title = content.specialties.title
  return { props: { id, title, hasHomeButton: true } }
}
export default function SpecialtiesPage () {
  return (
    <ContentContainer>
      <ListBox
        id='specialty-items'
        listId='specialty-item'
        items={content.specialties.items}
      />
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

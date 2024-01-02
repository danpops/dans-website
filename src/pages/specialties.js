import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'

export function getStaticProps () {
  const id = 'specialties'
  const title = content.specialties.title
  return { props: { id, title } }
}
export default function SpecialtiesPage () {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{content.specialties.text}</BodyText>
      <ListBox
        id='specialty-items'
        listId='specialty-item'
        items={content.specialties.items}
      />
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

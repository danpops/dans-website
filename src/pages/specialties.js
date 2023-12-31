import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import ListBox from '@/components/ListBox'

export function getStaticProps () {
  const id = 'specialties'
  const title = content.specialties.title
  return { props: { id, title, hasHomeButton: true } }
}
export default function SpecialtiesPage () {
  return (
    <ListBox
      id='specialty-items'
      listId='specialty-item'
      items={content.specialties.items}
    />
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

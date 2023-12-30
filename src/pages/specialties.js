import { content } from '@/assets/data/content'
import HomeButton from '@/components/HomeButton'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { Heading2 } from '@/components/Text'

export default function SpecialtiesPage () {
  return (
    <ContentContainer id='specialties'>
      <SectionContainer id='specialties-section'>
        <Heading2 id='specialties-title'>{content.specialties.title}</Heading2>
        <ListBox
          id='specialty-items'
          listId='specialty-item'
          items={content.specialties.items}
        />
        <HomeButton />
      </SectionContainer>
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

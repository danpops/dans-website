import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { Heading2 } from '@/components/Text'
import { colors } from '@/design/colors'

export default function SpecialtiesPage () {
  return (
    <ContentContainer id='specialties'>
      <SectionContainer id='specialties-section'>
        <Heading2 id='specialties-title'>{content.specialties.title}</Heading2>
        <ListBox
          id='specialty-items'
          listId='specialty-item'
          items={content.specialties.items}
          bgColor={colors.yellow}
          color={colors.blue}
          borderColor={colors.red}
        />
      </SectionContainer>
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

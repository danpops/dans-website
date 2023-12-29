import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { Heading2 } from '@/components/Text'

export default function SpecialtiesPage () {
  return (
    <ContentContainer id='specialties'>
      <SectionContainer id='specialties-section'>
        <Heading2 id='specialties-title'>{content.specialties.title}</Heading2>
        <ul id='specialty-items'>
          {content.specialties.items.map((item, index) => (
            <li key={index} id='specialty-item'>
              {item}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

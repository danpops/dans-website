import { ContentContainer } from '@/components/Layout/styles'
import SpecialtyItems from '@/components/SpecialtyItems'
import { BodyText } from '@/components/Text'

export default function Specialties (props) {
  const { data, isDarkMode } = props
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      <SpecialtyItems
        id='specialty-items'
        specialties={data.specialtyLinks}
        isDarkMode={isDarkMode}
      />
    </ContentContainer>
  )
}

import { ContentContainer } from '@/components/Layout/styles'
import SpecialtyItems from '@/components/SpecialtyItems'
import { BodyText } from '@/components/Text'

export default function Specialties ({ data }) {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      <SpecialtyItems id='specialty-items' items={data.specialtyLinks} />
    </ContentContainer>
  )
}

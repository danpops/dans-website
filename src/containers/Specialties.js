import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'

export default function Specialties ({ data }) {
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

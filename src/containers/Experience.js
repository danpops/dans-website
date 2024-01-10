import ExperienceCard from '@/components/ExperienceCard'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'

export default function Experience ({ data }) {
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      {data.cards.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </ContentContainer>
  )
}

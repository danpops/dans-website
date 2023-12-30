import { BodyText } from '@/components/Text'
import {
  CardContainer,
  CardHeader,
  CompanyImage,
  DetailsContainer,
  TitleContainer
} from './styles'
import Markdown from 'react-markdown'

export default function ExperienceCard ({ item }) {
  const composeExperienceDetails = (note, nIndex) => (
    <BodyText key={nIndex} id='experience-detail'>
      <Markdown>{note}</Markdown>
    </BodyText>
  )

  return (
    <CardContainer id='experience-card'>
      <CardHeader>
        <CompanyImage
          id='company-logo'
          src={item.logo}
          alt={`${item.company}-logo`}
        />
        <TitleContainer>
          <BodyText id='experience-date'>{item.date}</BodyText>
          <BodyText id='experience-title' style={{ fontWeight: 'bold' }}>
            {item.title}
          </BodyText>
          <BodyText id='experience-company'>{item.company}</BodyText>
        </TitleContainer>
      </CardHeader>
      <DetailsContainer id='experience-details'>
        {item.notes.map(composeExperienceDetails)}
      </DetailsContainer>
    </CardContainer>
  )
}

import { BodyText } from '@/components/Text'
import {
  CardContainer,
  CardHeader,
  CompanyImage,
  DetailsContainer,
  TitleContainer
} from './styles'
import Markdown from 'react-markdown'

export default function ExperienceCard ({ experience, inverted }) {
  return (
    <CardContainer id='experience-card'>
      <CardHeader>
        <CompanyImage
          id='company-logo'
          src={experience.logo.image}
          alt={experience.logo.alt}
          height={100}
          width={100}
          $inverted={inverted}
        />
        <TitleContainer>
          <BodyText id='experience-date'>{experience.date}</BodyText>
          <BodyText id='experience-title' style={{ fontWeight: 'bold' }}>
            {experience.title}
          </BodyText>
          <BodyText id='experience-company'>{experience.company}</BodyText>
        </TitleContainer>
      </CardHeader>
      <DetailsContainer id='experience-details'>
        {experience.notes.map((note, index) => (
          <BodyText key={index} id='experience-detail'>
            <Markdown>{note}</Markdown>
          </BodyText>
        ))}
      </DetailsContainer>
    </CardContainer>
  )
}

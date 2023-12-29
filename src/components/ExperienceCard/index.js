import { BodyText, Heading3, Heading4, Heading5 } from '@/components/Text'
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
          width={100}
          height={100}
        />
        <TitleContainer>
          <Heading5 id='experience-date'>{item.date}</Heading5>
          <Heading3 id='experience-title'>{item.title}</Heading3>
          <Heading4 id='experience-company'>{item.company}</Heading4>
          <Heading5 id='experience-tech'>
            {item.technologies.join(' - ')}
          </Heading5>
        </TitleContainer>
      </CardHeader>
      <DetailsContainer id='experience-details'>
        {item.notes.map(composeExperienceDetails)}
      </DetailsContainer>
    </CardContainer>
  )
}

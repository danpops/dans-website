import { content } from '@/assets/data/content'
import { SectionContainer } from '../components/Layout/styles'
import { Heading2 } from '../components/Text'
import ExperienceCard from '@/components/ExperienceCard'

export default function ExperienceSection () {
  const composeExperience = (item, index) => (
    <ExperienceCard key={index} item={item} />
  )

  return (
    <SectionContainer id='experience-section'>
      <div>
        <Heading2 id='experience-title'>{content.experience.title}</Heading2>
        {content.experience.cards.map(composeExperience)}
      </div>
    </SectionContainer>
  )
}

import { content } from '@/assets/data/content'
import ExperienceCard from '@/components/ExperienceCard'
import GifButton from '@/components/GifButton'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import { Heading2 } from '@/components/Text'

export default function ExperiencePage () {
  const composeExperience = (item, index) => (
    <ExperienceCard key={index} item={item} />
  )

  return (
    <ContentContainer id='experience'>
      <SectionContainer id='experience-section'>
        <Heading2 id='experience-title'>{content.experience.title}</Heading2>
        {content.experience.cards.map(composeExperience)}
        <GifButton />
      </SectionContainer>
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getDefaultLayout

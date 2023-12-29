import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ExperienceSection from '@/sections/Experience'

export default function ExperiencePage () {
  return (
    <ContentContainer id='experience'>
      <ExperienceSection />
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getDefaultLayout

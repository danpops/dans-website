import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import AboutSection from '@/sections/About'

export default function AboutPage () {
  return (
    <ContentContainer id='about'>
      <AboutSection />
    </ContentContainer>
  )
}

AboutPage.getLayout = getDefaultLayout

import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ContactSection from '@/sections/Contact'
import HeroSection from '@/sections/Hero'

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <HeroSection />
      <ContactSection />
    </ContentContainer>
  )
}

LandingPage.getLayout = getDefaultLayout

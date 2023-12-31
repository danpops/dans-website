import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import HeroBanner from '@/components/HeroBanner'

export default function LandingPage () {
  return (
    <ContentContainer id='landing'>
      <HeroBanner />
    </ContentContainer>
  )
}

LandingPage.getLayout = getDefaultLayout

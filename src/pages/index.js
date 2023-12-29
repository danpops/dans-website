import { getDefaultLayout } from '@/components/Layout'
import HeroSection from '@/sections/Hero'

export default function LandingPage () {
  return (
    <div id='landing'>
      <HeroSection />
    </div>
  )
}

LandingPage.getLayout = getDefaultLayout

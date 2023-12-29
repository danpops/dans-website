import { getDefaultLayout } from '@/components/Layout'
import ContactSection from '@/sections/Contact'
import HeroSection from '@/sections/Hero'

export default function LandingPage () {
  return (
    <div id='landing'>
      <HeroSection />
      <ContactSection />
    </div>
  )
}

LandingPage.getLayout = getDefaultLayout

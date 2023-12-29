import { getDefaultLayout } from '@/components/Layout'
import AboutSection from '@/sections/About'

export default function AboutPage () {
  return (
    <div id='about'>
      <AboutSection />
    </div>
  )
}

AboutPage.getLayout = getDefaultLayout

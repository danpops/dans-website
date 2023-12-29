import { getDefaultLayout } from '@/components/Layout'
import ExperienceSection from '@/sections/Experience'

export default function ExperiencePage () {
  return (
    <div id='experience'>
      <ExperienceSection />
    </div>
  )
}

ExperiencePage.getLayout = getDefaultLayout

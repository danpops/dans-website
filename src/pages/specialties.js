import { getDefaultLayout } from '@/components/Layout'
import SpecialtySection from '@/sections/Specialties'

export default function SpecialtiesPage () {
  return (
    <div id='specialties'>
      <SpecialtySection />
    </div>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

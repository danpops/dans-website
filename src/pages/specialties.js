import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import SpecialtySection from '@/sections/Specialties'

export default function SpecialtiesPage () {
  return (
    <ContentContainer id='specialties'>
      <SpecialtySection />
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getDefaultLayout

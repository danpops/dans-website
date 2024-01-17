import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { useTheme } from '@/components/Layout/ThemeProvider'
import SpecialtyItems from '@/components/SpecialtyItems'
import { BodyText } from '@/components/Text'
import client from '@/cms/client'
import { GET_SPECIALTIES } from '@/cms/queries'

export async function getStaticProps () {
  const id = 'specialties'
  const data = await client.fetch(GET_SPECIALTIES)
  const title = data.title
  return { props: { id, title, data } }
}
export default function SpecialtiesPage ({ data }) {
  const { isDarkMode } = useTheme()
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      <SpecialtyItems
        id='specialty-items'
        specialties={data.specialtyLinks}
        isDarkMode={isDarkMode}
      />
    </ContentContainer>
  )
}

SpecialtiesPage.getLayout = getWindowLayout

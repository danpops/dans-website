import ExperienceCard from '@/components/ExperienceCard'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, WindowsContainers } from '@/components/Layout/styles'
import { useTheme } from '@/components/Layout/ThemeProvider'
import { BodyText } from '@/components/Text'
import client from '@/cms/client'
import { GET_EXPERIENCE } from '@/cms/queries'
import PageWindow from '@/components/Layout/PageWindow'
import SpecialtyItems from '@/components/SpecialtyItems'

export async function getServerSideProps () {
  const id = 'experience'
  const data = await client.fetch(GET_EXPERIENCE)
  return { props: { id, data } }
}
export default function ExperiencePage ({ data }) {
  const { isDarkMode } = useTheme()
  return (
    <WindowsContainers>
      <PageWindow id='experience' title={data.title}>
        <ContentContainer>
          <BodyText id='experience-text'>{data.summary}</BodyText>
          {data.cards.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              inverted={isDarkMode}
            />
          ))}
        </ContentContainer>
      </PageWindow>
      <PageWindow id='specialties' title={data.specialtyTitle}>
        <ContentContainer>
          <BodyText id='specialties-text'>{data.specialtySummary}</BodyText>
          <SpecialtyItems
            id='specialty-items'
            specialties={data.specialtyLinks}
            isDarkMode={isDarkMode}
          />
        </ContentContainer>
      </PageWindow>
    </WindowsContainers>
  )
}

ExperiencePage.getLayout = getDefaultLayout

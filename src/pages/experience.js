import ExperienceCard from '@/components/ExperienceCard'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { useTheme } from '@/components/Layout/ThemeProvider'
import { BodyText } from '@/components/Text'
import client from '@/cms/client'
import { GET_EXPERIENCE } from '@/cms/queries'

export async function getServerSideProps () {
  const id = 'experience'
  const data = await client.fetch(GET_EXPERIENCE)
  const title = data.title
  return { props: { id, title, data } }
}
export default function ExperiencePage ({ data }) {
  const { isDarkMode } = useTheme()
  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      {data.cards.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience={experience}
          inverted={isDarkMode}
        />
      ))}
    </ContentContainer>
  )
}

ExperiencePage.getLayout = getWindowLayout

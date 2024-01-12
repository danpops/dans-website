import ExperienceCard from '@/components/ExperienceCard'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'
import { useTheme } from '@/components/ThemeProvider'

export default function Experience ({ data }) {
  const { themeMode } = useTheme()
  const inverted = themeMode === 'dark'

  return (
    <ContentContainer>
      <BodyText id='specialties-text'>{data.summary}</BodyText>
      {data.cards.map((item, index) => (
        <ExperienceCard key={index} item={item} inverted={inverted} />
      ))}
    </ContentContainer>
  )
}

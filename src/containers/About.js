import Image from 'next/image'
import { ContentContainer } from '@/components/Layout/styles'
import { BodyText } from '@/components/Text'
import { useTheme } from '@/components/ThemeProvider'

export default function About ({ data }) {
  const { themeMode } = useTheme()
  const inverted = themeMode === 'dark'
  const imgStyle = inverted ? { filter: 'invert(100%)' } : {}

  return (
    <ContentContainer>
      <Image
        src={data.aboutGif.image}
        alt={data.aboutGif.alt}
        width={125}
        height={125}
        style={imgStyle}
      />
      <BodyText id='about-text'>{data.heading}</BodyText>
      <BodyText id='about-summary'>{data.summary}</BodyText>
    </ContentContainer>
  )
}

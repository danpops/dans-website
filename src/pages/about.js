import Image from 'next/image'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { useTheme } from '@/components/Layout/ThemeProvider'
import { BodyText } from '@/components/Text'
import client from '@/cms/client'
import { GET_ABOUT, GET_RESUME } from '@/cms/queries'
import { ResumeLink } from '@/components/HeroBanner/styles'

export async function getServerSideProps () {
  const id = 'about'
  const data = await client.fetch(GET_ABOUT)
  const resume = await client.fetch(GET_RESUME)
  const title = data.title
  return { props: { id, title, data, resume } }
}
export default function AboutPage ({ data, resume }) {
  const { isDarkMode } = useTheme()
  const imgStyle = isDarkMode ? { filter: 'invert(100%)' } : {}
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
      <ResumeLink
        id='resume-link'
        target='_blank'
        rel='noopener noreferrer'
        href={resume.resumeURL}
        style={{ justifySelf: 'center' }}
      >
        Resume
      </ResumeLink>
    </ContentContainer>
  )
}

AboutPage.getLayout = getWindowLayout

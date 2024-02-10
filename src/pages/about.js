import Image from 'next/image'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { useTheme } from '@/components/Layout/ThemeProvider'
import { Anchor, BodyText } from '@/components/Text'
import client from '@/cms/client'
import { GET_ABOUT } from '@/cms/queries'
import { LinkText } from '@/components/ReleaseDetails/styles'
import { useRouter } from 'next/router'

export async function getServerSideProps () {
  const id = 'about'
  const data = await client.fetch(GET_ABOUT)
  const title = data.title
  return { props: { id, title, data } }
}
export default function AboutPage ({ data }) {
  const { isDarkMode } = useTheme()
  const router = useRouter()
  const goToSynth = () => router.push('/synth/note')
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
      <LinkText id='synth-link' style={{ zIndex: 2000 }}>
        Check out{' '}
        <Anchor style={{ cursor: 'pointer' }} onClick={goToSynth}>
          this cool synth
        </Anchor>{' '}
        I am building
      </LinkText>
    </ContentContainer>
  )
}

AboutPage.getLayout = getWindowLayout

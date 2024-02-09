import { getHeroLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_LANDING } from '@/cms/queries'
import { useRouter } from 'next/router'
import { useTheme } from '@/components/Layout/ThemeProvider'
import HeroBanner from '@/components/HeroBanner'

export async function getServerSideProps () {
  const id = 'landing'
  const data = await client.fetch(GET_LANDING)
  return { props: { id, data } }
}
export default function LandingPage ({ data }) {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const goToAbout = () => router.push('/about')
  const goToContact = () => router.push('/contact')
  const goToSynth = () => router.push('/synth/note')
  return (
    <HeroBanner
      data={data}
      isDarkMode={isDarkMode}
      goToAbout={goToAbout}
      goToContact={goToContact}
      goToSynth={goToSynth}
    />
  )
}

LandingPage.getLayout = getHeroLayout

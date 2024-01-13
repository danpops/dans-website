import { getHeroLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_LANDING } from '@/cms/queries'
import Landing from '@/containers/Landing'
import { useRouter } from 'next/router'
import { useTheme } from '@/components/ThemeProvider'

export default function LandingPage ({ data }) {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const goToAbout = () => router.push('/about')
  const goToContact = () => router.push('/contact')
  return (
    <Landing
      data={data}
      goToAbout={goToAbout}
      goToContact={goToContact}
      isDarkMode={isDarkMode}
    />
  )
}
export async function getStaticProps () {
  const id = 'landing'
  const data = await client.fetch(GET_LANDING)
  return { props: { id, data } }
}

LandingPage.getLayout = getHeroLayout

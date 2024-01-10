import { getHeroLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_LANDING } from '@/cms/queries'
import Home from '@/containers/Home'
import { useRouter } from 'next/router'

export default function LandingPage ({ data }) {
  const router = useRouter()
  const goToAbout = () => router.push('/about')
  const goToContact = () => router.push('/contact')
  return <Home data={data} goToAbout={goToAbout} goToContact={goToContact} />
}
export async function getStaticProps () {
  const id = 'landing'
  const data = await client.fetch(GET_LANDING)
  return { props: { id, data } }
}

LandingPage.getLayout = getHeroLayout

import { getHeroLayout } from '@/components/Layout'
import HeroBanner from '@/components/HeroBanner'

export function getStaticProps () {
  const id = 'landing'
  return { props: { id } }
}
export default function LandingPage () {
  return <HeroBanner />
}

LandingPage.getLayout = getHeroLayout

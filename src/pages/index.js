import { getHeroLayout } from '@/components/Layout'
import HeroBanner from '@/components/HeroBanner'
import client from '@/cms/client'
import { GET_LANDING } from '@/cms/queries'

export default function LandingPage ({ data }) {
  return (
    <HeroBanner
      title={data.title}
      welcomeGif={data.welcomeGif}
      iconGif={data.iconGif}
      aboutLinkGif={data.aboutLinkGif}
      contactLinkGif={data.contactLinkGif}
    />
  )
}
export async function getStaticProps () {
  const id = 'landing'
  const data = await client.fetch(GET_LANDING)
  return { props: { id, data } }
}

LandingPage.getLayout = getHeroLayout

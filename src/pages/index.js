import { getHeroLayout } from '@/components/Layout'
import HeroBanner from '@/components/HeroBanner'
import { querySanity } from '../cms/query'

export default function LandingPage ({ data }) {
  return (
    <HeroBanner
      title={data.title}
      welcomeGif={data.welcomeGif}
      iconGif={data.iconGif}
    />
  )
}
export async function getServerSideProps () {
  const id = 'landing'
  const data = await querySanity(
    `*[_type == "landing"][0]{
      _id,
      title,
      welcomeGif {alt, "image": asset->url},
      iconGif {alt, "image": asset->url}
    }`
  )
  return { props: { id, data } }
}

LandingPage.getLayout = getHeroLayout

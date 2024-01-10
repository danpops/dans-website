import { getWindowLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_ABOUT } from '@/cms/queries'
import About from '@/containers/About'

export default function AboutPage ({ data }) {
  return <About data={data} />
}
export async function getStaticProps () {
  const id = 'about'
  const data = await client.fetch(GET_ABOUT)
  const title = data.title
  return { props: { id, title, data } }
}

AboutPage.getLayout = getWindowLayout

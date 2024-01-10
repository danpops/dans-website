import { getWindowLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_EXPERIENCE } from '@/cms/queries'
import Experience from '@/containers/Experience'

export default function ExperiencePage ({ data }) {
  return <Experience data={data} />
}
export async function getStaticProps () {
  const id = 'experience'
  const data = await client.fetch(GET_EXPERIENCE)
  const title = data.title
  return { props: { id, title, data } }
}

ExperiencePage.getLayout = getWindowLayout

import { getWindowLayout } from '@/components/Layout'
import client from '@/cms/client'
import { GET_EXPERIENCE } from '@/cms/queries'
import Experience from '@/containers/Experience'
import { useTheme } from '@/components/Layout/ThemeProvider'

export default function ExperiencePage ({ data }) {
  const { isDarkMode } = useTheme()
  return <Experience data={data} isDarkMode={isDarkMode} />
}
export async function getStaticProps () {
  const id = 'experience'
  const data = await client.fetch(GET_EXPERIENCE)
  const title = data.title
  return { props: { id, title, data } }
}

ExperiencePage.getLayout = getWindowLayout

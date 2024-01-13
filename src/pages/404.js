import { getWindowLayout } from '@/components/Layout'
import NotFound from '@/containers/NotFound'

export default function NotFoundPage () {
  return <NotFound />
}
export function getStaticProps () {
  const id = 'error'
  const title = 'Error'
  return { props: { id, title } }
}

NotFoundPage.getLayout = getWindowLayout

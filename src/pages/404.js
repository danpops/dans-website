import ErrorMessage from '@/components/ErrorMessage'
import { getWindowLayout } from '@/components/Layout'

export default function ErrorPage () {
  return <ErrorMessage />
}
export function getStaticProps () {
  const id = 'error'
  const title = 'Error'
  return { props: { id, title } }
}

ErrorPage.getLayout = getWindowLayout

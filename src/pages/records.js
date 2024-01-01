import { getDefaultLayout } from '@/components/Layout'

export function getStaticProps () {
  const id = 'records'
  const title = 'my records'
  return { props: { id, title } }
}
export default function RecordsPage () {
  return <div>here are a list of my records hahaha</div>
}

RecordsPage.getLayout = getDefaultLayout

import client from '@/cms/client'
import { GET_SPECIALTIES } from '@/cms/queries'
import { getWindowLayout } from '@/components/Layout'
import Specialties from '@/containers/Specialties'

export default function SpecialtiesPage ({ data }) {
  return <Specialties data={data} />
}
export async function getStaticProps () {
  const id = 'specialties'
  const data = await client.fetch(GET_SPECIALTIES)
  const title = data.title
  return { props: { id, title, data } }
}

SpecialtiesPage.getLayout = getWindowLayout

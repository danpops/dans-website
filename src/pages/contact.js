import { getWindowLayout } from '@/components/Layout'
import useContactForm from '@/hooks/useContactForm'
import client from '@/cms/client'
import { GET_CONTACT } from '@/cms/queries'
import Contact from '@/containers/Contact'

export default function ContactPage ({ apiKey, apiUrl, data }) {
  const contact = useContactForm({ apiKey, apiUrl })
  return <Contact contact={contact} data={data} />
}
export async function getStaticProps () {
  const id = 'contact'
  const data = await client.fetch(GET_CONTACT)
  const title = data.title
  const apiKey = process.env.API_KEY ?? ''
  const apiUrl = process.env.API_URL ?? ''
  return { props: { id, title, apiKey, apiUrl, data } }
}

ContactPage.getLayout = getWindowLayout

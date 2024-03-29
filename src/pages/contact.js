import ContactForm from '@/components/ContactForm'
import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'
import useContactForm from '@/hooks/useContactForm'
import client from '@/cms/client'
import { GET_CONTACT } from '@/cms/queries'

export async function getServerSideProps () {
  const id = 'contact'
  const data = await client.fetch(GET_CONTACT)
  const title = data.title
  const apiKey = process.env.CONTACT_API_KEY ?? ''
  const apiUrl = process.env.CONTACT_API_URL ?? ''
  return { props: { id, title, apiKey, apiUrl, data } }
}
export default function ContactPage ({ apiKey, apiUrl, data }) {
  const contactForm = useContactForm({ apiKey, apiUrl })
  return (
    <ContentContainer>
      <BodyText id='contact-text'>{data.summary}</BodyText>
      <ContactForm {...contactForm} successMessage={data.successMessage} />
      <ListBox
        id='contact-links'
        listId='contact-link'
        items={data.contactLinks}
      />
    </ContentContainer>
  )
}

ContactPage.getLayout = getWindowLayout

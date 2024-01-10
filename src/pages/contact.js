import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import EmailForm from '@/components/EmailForm'
import { BodyText } from '@/components/Text'
import useContactForm from '@/hooks/useContactForm'
import client from '@/cms/client'
import { GET_CONTACT } from '@/cms/queries'

export default function ContactPage ({ apiKey, apiUrl, data }) {
  const contact = useContactForm({ apiKey, apiUrl })

  return (
    <ContentContainer>
      <BodyText id='contact-text'>{data.summary}</BodyText>
      <EmailForm
        loading={contact.loading}
        emailSent={contact.emailSent}
        handleSubmit={contact.onSubmit}
        formData={contact.formData}
        handleInputChange={contact.onChangeInput}
        successMessage={data.successMessage}
      />
      <ListBox
        id='contact-links'
        listId='contact-link'
        items={data.contactLinks}
      />
    </ContentContainer>
  )
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

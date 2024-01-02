import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import EmailForm from '@/components/EmailForm'
import { BodyText } from '@/components/Text'
import useContactForm from '@/hooks/useContactForm'

export function getStaticProps () {
  const id = 'contact'
  const title = content.contact.title
  const apiKey = process.env.API_KEY ?? ''
  const apiUrl = process.env.API_URL ?? ''
  return { props: { id, title, apiKey, apiUrl } }
}
export default function ContactPage ({ apiKey, apiUrl }) {
  const contact = useContactForm({ apiKey, apiUrl })

  return (
    <ContentContainer>
      <BodyText id='contact-text'>{content.contact.text}</BodyText>
      <EmailForm
        loading={contact.loading}
        emailSent={contact.emailSent}
        handleSubmit={contact.onSubmit}
        formData={contact.formData}
        handleInputChange={contact.onChangeInput}
      />
      <ListBox
        id='contact-links'
        listId='contact-link'
        items={content.contact.items}
      />
    </ContentContainer>
  )
}

ContactPage.getLayout = getDefaultLayout

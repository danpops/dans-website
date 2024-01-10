import EmailForm from '@/components/EmailForm'
import { ContentContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'

export default function Contact ({ data, contact }) {
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

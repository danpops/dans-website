import { content } from '@/assets/data/content'
import { TextArea, TextInput } from '../Input'
import { CustomForm, SubmitButton } from './styles'

export default function EmailForm (props) {
  const { emailSent, handleSubmit, formData, handleInputChange } = props
  const disabled =
    formData.fullName === '' || formData.email === '' || formData.message === ''

  if (emailSent) {
    return <div>Email sent!</div>
  }

  return (
    <CustomForm onSubmit={handleSubmit} id='email-form'>
      <TextInput
        id='name-input'
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <TextInput
        id='email-input'
        placeholder='Email'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextArea
        id='message-input'
        name='message'
        placeholder='Enter your message...'
        value={formData.message}
        onChange={handleInputChange}
      />
      <SubmitButton id='submit-button' type='submit' disabled={disabled}>
        {content.contact.submitButton}
      </SubmitButton>
    </CustomForm>
  )
}

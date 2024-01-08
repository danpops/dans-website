import { TextArea, TextInput } from '../Input'
import { CustomForm, SubmitButton } from './styles'
import ProgressTile from '../ProgressTile'
import useProgress from '@/hooks/useProgress'
import { BodyText } from '../Text'

export default function EmailForm (props) {
  const {
    emailSent,
    handleSubmit,
    loading,
    formData,
    handleInputChange,
    successMessage
  } = props
  const { progressVisible, progressValue } = useProgress({ loading })
  const disabled =
    formData.fullName === '' || formData.email === '' || formData.message === ''

  if (progressVisible) {
    return <ProgressTile value={progressValue} />
  }

  if (emailSent && !progressVisible) {
    return <BodyText id='success-message'>{successMessage}</BodyText>
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
        Send Message
      </SubmitButton>
    </CustomForm>
  )
}

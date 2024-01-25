import {
  CustomForm,
  ErrorLabel,
  SubmitButton,
  TextArea,
  TextInput
} from './styles'
import ProgressTile from '../ProgressTile'
import useProgress from '@/hooks/useProgress'
import { BodyText } from '../Text'

export default function ContactForm (props) {
  const {
    register,
    loading,
    emailSent,
    submitContact,
    errors,
    successMessage
  } = props
  const { progressVisible, progressValue } = useProgress({ loading })

  if (progressVisible) {
    return <ProgressTile value={progressValue} />
  }

  if (emailSent && !progressVisible) {
    return <BodyText id='success-message'>{successMessage}</BodyText>
  }

  return (
    <CustomForm onSubmit={submitContact} id='email-form'>
      <TextInput
        id='name-input'
        type='text'
        placeholder='Full Name'
        {...register('fullName', {
          required: 'Name is required',
          maxLength: 30
        })}
      />
      {errors.fullName && <ErrorLabel>{errors.fullName?.message}</ErrorLabel>}
      <TextInput
        id='email-input'
        placeholder='Email'
        type='email'
        {...register('email', {
          required: 'Email Address is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format'
          }
        })}
      />
      {errors.email && <ErrorLabel>{errors.email?.message}</ErrorLabel>}
      <TextArea
        id='message-input'
        placeholder='Enter your message...'
        {...register('message', {
          required: 'Message is required',
          pattern: {
            value: /^(?:\b\w+\b[\s\r\n.,?!';]*){10,250}$/,
            message: 'At least 10 words must be entered.'
          }
        })}
        rows={3}
      />
      {errors.message && <ErrorLabel>{errors.message?.message}</ErrorLabel>}
      <SubmitButton id='submit-button' type='submit'>
        Send Message
      </SubmitButton>
    </CustomForm>
  )
}

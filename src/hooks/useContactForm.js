import { useState } from 'react'
import { THREE_SECONDS } from './useProgress'
import { useForm } from 'react-hook-form'
import { sendContactMessage } from '@/lib/api'

const defaultValues = { fullName: '', email: '', message: '' }

export default function useContactForm ({ apiKey, apiUrl }) {
  const form = useForm({ defaultValues })
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = data => {
    setLoading(true)
    sendContactMessage({ apiUrl, data, apiKey })
      .then(composeSuccess)
      .catch(composeError)
  }

  return {
    emailSent,
    loading,
    register: form.register,
    submitContact: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    errorMessage
  }

  function composeError (error) {
    setTimeout(() => {
      setLoading(false)
      setErrorMessage(error.message)
    }, THREE_SECONDS)
  }
  function composeSuccess (res) {
    if (!res.success) {
      throw new Error('Error sending message')
    }
    setEmailSent(true)
    setTimeout(() => setLoading(false), THREE_SECONDS)
  }
}

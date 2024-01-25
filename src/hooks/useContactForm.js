import { useState } from 'react'
import { THREE_SECONDS } from './useProgress'
import { useForm } from 'react-hook-form'

const INITIAL_FORM = { fullName: '', email: '', message: '' }
export default function useContactForm ({ apiKey, apiUrl }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: INITIAL_FORM })
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const onSubmit = data => {
    setLoading(true)
    const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
    const body = JSON.stringify(data)
    fetch(apiUrl, { method: 'POST', headers, body })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(res => {
        if (!res.success) {
          throw new Error('Error sending message')
        }
        setEmailSent(true)
        setTimeout(() => setLoading(false), THREE_SECONDS)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }

  return {
    emailSent,
    loading,
    register,
    submitContact: handleSubmit(onSubmit),
    errors
  }
}

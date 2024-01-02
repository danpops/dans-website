import { useState } from 'react'
import { THREE_SECONDS } from './useProgress'

const INITIAL_FORM = { fullName: '', email: '', message: '' }
export default function useContactForm ({ apiKey, apiUrl }) {
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM)

  const onChangeInput = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const onSubmit = e => {
    setLoading(true)
    e.preventDefault()
    const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
    const body = JSON.stringify(formData)
    const options = { method: 'POST', headers, body }
    fetch(apiUrl, options)
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

  return { emailSent, formData, loading, onChangeInput, onSubmit }
}

import { useState } from 'react'

const INITIAL_FORM = { fullName: '', email: '', message: '' }

export default function useContactForm ({ apiKey, apiUrl }) {
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM)

  const onChangeInput = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
    const body = JSON.stringify(formData)
    const options = { method: 'POST', headers, body }
    const response = await fetch(apiUrl, options)
      .then(data => data)
      .catch(console.error)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const jsonResponse = await response.json()
    if (!jsonResponse.success) {
      throw new Error('Error sending message')
    }
    setEmailSent(true)
  }

  return { emailSent, formData, onChangeInput, onSubmit }
}

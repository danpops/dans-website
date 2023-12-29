import { getDefaultLayout } from '@/components/Layout'
import ContactSection from '@/sections/Contact'

export default function ContactPage () {
  return (
    <div id='contact'>
      <ContactSection />
    </div>
  )
}

ContactPage.getLayout = getDefaultLayout

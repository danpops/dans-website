import ContactSection from '@/components/ContactSection'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'

export default function ContactPage () {
  return (
    <ContentContainer id='contact'>
      <ContactSection />
    </ContentContainer>
  )
}

ContactPage.getLayout = getDefaultLayout

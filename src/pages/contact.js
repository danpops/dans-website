import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import ContactSection from '@/sections/Contact'

export default function ContactPage () {
  return (
    <ContentContainer id='contact'>
      <ContactSection />
    </ContentContainer>
  )
}

ContactPage.getLayout = getDefaultLayout

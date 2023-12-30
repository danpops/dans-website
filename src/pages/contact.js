import { content } from '@/assets/data/content'
import GifButton from '@/components/GifButton'
import { getDefaultLayout } from '@/components/Layout'
import { ContentContainer, SectionContainer } from '@/components/Layout/styles'
import ListBox from '@/components/ListBox'
import { BodyText, Heading2 } from '@/components/Text'

export default function ContactPage () {
  return (
    <ContentContainer id='contact'>
      <SectionContainer id='contact-section'>
        <Heading2 id='contact-title'>{content.contact.title}</Heading2>
        <BodyText id='contact-text'>{content.contact.text}</BodyText>
        <ListBox
          id='contact-links'
          listId='contact-link'
          items={content.contact.items}
        />
        <GifButton />
      </SectionContainer>
    </ContentContainer>
  )
}

ContactPage.getLayout = getDefaultLayout

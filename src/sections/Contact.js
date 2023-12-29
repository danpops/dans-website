import { content } from '@/assets/data/content'
import { SectionContainer } from '../components/Layout/styles'
import { BodyText, Heading2 } from '../components/Text'

export default function ContactSection () {
  return (
    <SectionContainer id='contact-section'>
      <div>
        <Heading2 id='contact-title'>{content.contact.title}</Heading2>
        <BodyText id='contact-text'>{content.contact.text}</BodyText>
        <ul id='contact-links'>
          {content.contact.items.map((item, index) => (
            <li key={index} id='contact-link'>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

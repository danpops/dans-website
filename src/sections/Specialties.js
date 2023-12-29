import { content } from '@/assets/data/content'
import { SectionContainer } from '../components/Layout/styles'
import { Heading2 } from '../components/Text'

export default function SpecialtySection () {
  return (
    <SectionContainer id='specialties-section'>
      <div>
        <Heading2 id='specialties-title'>{content.specialties.title}</Heading2>
        <ul id='specialty-items'>
          {content.specialties.items.map((item, index) => (
            <li key={index} id='specialty-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

import { BodyText } from '../Text'
import {
  SpecialtyItemsContainer,
  SpecialtyItemContainer,
  SpecialtyImage,
  SpecialtyImageContainer
} from './styles'

export default function SpecialtyItems (props) {
  const { id, specialties, isDarkMode } = props
  return (
    <SpecialtyItemsContainer id={id}>
      {specialties.map((item, index) => (
        <SpecialtyItemContainer
          key={index}
          id='specialty-item'
          target='_blank'
          rel='noopener noreferrer'
          href={item?.link}
          style={{ cursor: item?.link ? 'pointer' : 'default' }}
        >
          <SpecialtyImageContainer>
            <SpecialtyImage
              inverted={isDarkMode}
              src={item.logo.image}
              alt={item.logo.alt}
              width={20}
              height={20}
            />
          </SpecialtyImageContainer>
          <BodyText>{item.name}</BodyText>
        </SpecialtyItemContainer>
      ))}
    </SpecialtyItemsContainer>
  )
}

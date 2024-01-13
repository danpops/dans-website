import { BodyText } from '../Text'
import { useTheme } from '../ThemeProvider'
import {
  SpecialtyItemsContainer,
  SpecialtyItemContainer,
  SpecialtyImage,
  SpecialtyImageContainer
} from './styles'

export default function SpecialtyItems (props) {
  const { themeMode } = useTheme()
  const inverted = themeMode === 'dark'
  const { id, items } = props
  return (
    <SpecialtyItemsContainer id={id}>
      {items.map((item, index) => {
        return <SpecialtyItem key={index} item={item} inverted={inverted} />
      })}
    </SpecialtyItemsContainer>
  )
}
function SpecialtyItem ({ item, inverted }) {
  return (
    <SpecialtyItemContainer
      id='specialty-item'
      target='_blank'
      rel='noopener noreferrer'
      href={item?.link}
      style={{ cursor: item?.link ? 'pointer' : 'default' }}
    >
      <SpecialtyImageContainer>
        <SpecialtyImage
          inverted={inverted}
          src={item.logo.image}
          alt={item.logo.alt}
          width={20}
          height={20}
        />
      </SpecialtyImageContainer>
      <BodyText>{item.name}</BodyText>
    </SpecialtyItemContainer>
  )
}

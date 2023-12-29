import { Heading3 } from '../Text'
import { ListBoxContainer, ListItem } from './styles'

export default function ListBox (props) {
  const { id, listId, bgColor, color, borderColor, items } = props
  return (
    <ListBoxContainer id={id}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          id={listId}
          $bgcolor={bgColor}
          $color={color}
          $bordercolor={borderColor}
        >
          <Heading3>{item}</Heading3>
        </ListItem>
      ))}
    </ListBoxContainer>
  )
}

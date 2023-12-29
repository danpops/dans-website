import { colors } from '@/design/colors'
import { Heading3 } from '../Text'
import { ListBoxContainer, ListItem } from './styles'

export default function ListBox (props) {
  const { id, listId, items } = props
  return (
    <ListBoxContainer id={id}>
      {items.map((item, index) => {
        return (
          <ListItem
            key={index}
            id={listId}
            $bgcolor={colors.yellow}
            $color={colors.blue}
            $bordercolor={colors.red}
            target='_blank'
            rel='noopener noreferrer'
            href={item?.link}
            style={{ cursor: item?.link ? 'pointer' : 'default' }}
          >
            <Heading3>{item.name}</Heading3>
          </ListItem>
        )
      })}
    </ListBoxContainer>
  )
}

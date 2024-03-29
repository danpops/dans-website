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
            target='_blank'
            rel='noopener noreferrer'
            href={item?.link}
            style={{ cursor: item?.link ? 'pointer' : 'default' }}
          >
            {item.name}
          </ListItem>
        )
      })}
    </ListBoxContainer>
  )
}

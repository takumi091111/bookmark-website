import { jsx } from '@emotion/core'
import { Props } from './types'
import { List } from '~/components/List'

const BookmarkList = (props: Props): JSX.Element => {
  const { items, onItemClick } = props
  return (
    <List>
      {items.map((item, index) => (
        <List.Item
          key={index}
          onClick={() => onItemClick(index)}
          size="md"
          border>
          <h1>{item.title}</h1>
          <h2>{item.url}</h2>
          <a href={`#${item.url}`} />
        </List.Item>
      ))}
    </List>
  )
}

export default BookmarkList

import { jsx } from '@emotion/core'
import { List } from '~/components/List'
import { Props } from './types'

const TagList = (props: Props): JSX.Element => {
  const { items, onItemClick } = props

  return (
    <List>
      <List.Header text="Tags" />
      {items.map((item, index) => (
        <List.Item key={index} onClick={() => onItemClick(index)}>
          <a href={`#${item}`}>{item}</a>
        </List.Item>
      ))}
    </List>
  )
}

export default TagList

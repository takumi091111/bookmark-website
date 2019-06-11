import { jsx } from '@emotion/core'
import { TagListHeader } from './TagListHeader'
import { TagListItem } from './TagListItem'
import { style } from './TagList.css'
import { Props } from './types'

const createItems = (props: Props): JSX.Element[] => {
  const { items, onItemClick } = props
  return items.map((item, index) => (
    <TagListItem key={index} item={item} onClick={() => onItemClick(index)} />
  ))
}

const TagList = (props: Props): JSX.Element => (
  <ul css={style}>
    <TagListHeader />
    {createItems(props)}
  </ul>
)

export default TagList

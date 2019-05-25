/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './BookmarkList.css'
import { Props } from './types'
import BookmarkListItem from './BookmarkListItem/BookmarkListItem'

const createItems = (props: Props): JSX.Element[] => {
  const { items, onItemClick } = props
  return items.map((item, index) => (
    <BookmarkListItem
      key={index}
      item={item}
      onClick={() => onItemClick(index)}
    />
  ))
}

const BookmarkList = (props: Props): JSX.Element => (
  <ul css={style}>{createItems(props)}</ul>
)

export default BookmarkList

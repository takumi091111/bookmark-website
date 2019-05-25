/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './BookmarkListItem.css'
import { Props } from './types'

const BookmarkListItem = (props: Props): JSX.Element => {
  const { item, onClick } = props

  return (
    <li css={style} onClick={onClick}>
      <h1>{item.title}</h1>
      <h2>{item.url}</h2>
      <a href={`#${item.url}`} />
    </li>
  )
}

export default BookmarkListItem

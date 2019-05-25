/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './TagListItem.css'
import { Props } from './types'

const TagListItem = (props: Props): JSX.Element => {
  const { item, onClick } = props
  return (
    <li css={style} onClick={onClick}>
      <a href={`#${item}`}>{item}</a>
    </li>
  )
}

export default TagListItem

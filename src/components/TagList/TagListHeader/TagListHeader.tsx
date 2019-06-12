import { jsx } from '@emotion/core'
import { style } from './TagListHeader.css'

const TagListHeader = (): JSX.Element => (
  <li className="tag-list-header" css={style}>
    <p>Tags</p>
  </li>
)

export default TagListHeader

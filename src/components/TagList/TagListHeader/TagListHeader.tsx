import { jsx } from '@emotion/core'
import { style } from './TagListHeader.css'

const TagListHeader = (): JSX.Element => (
  <li className="tag-list-header" css={style}>
    <h1>Tags</h1>
  </li>
)

export default TagListHeader

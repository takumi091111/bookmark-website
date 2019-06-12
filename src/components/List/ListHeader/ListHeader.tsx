import { jsx } from '@emotion/core'
import { style } from './ListHeader.css'
import { Props } from './types'

const ListHeader = ({ text }: Props): JSX.Element => (
  <li css={style}>
    <p>{text}</p>
  </li>
)

export default ListHeader

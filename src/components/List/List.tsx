import { jsx } from '@emotion/core'
import { style } from './List.css'
import { Props } from './types'
import { ListHeader } from './ListHeader'
import { ListItem } from './ListItem'

const List = ({ children }: Props): JSX.Element => (
  <ul css={style}>{children}</ul>
)

List.Header = ListHeader
List.Item = ListItem

export default List

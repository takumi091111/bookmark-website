import { jsx } from '@emotion/core'
import { style } from './ListItem.css'
import { Props } from './types'

const ListItem = (props: Props): JSX.Element => {
  const { children, size, border, lastBorder, onClick } = props
  return (
    <li css={style(size, border, lastBorder)} onClick={onClick}>
      {children}
    </li>
  )
}

export default ListItem

import { jsx } from '@emotion/core'
import { style } from './IconButton.css'
import { Props } from './types'

const IconButton = (props: Props): JSX.Element => {
  const { children, onClick } = props

  return (
    <i css={style} onClick={onClick}>
      {children}
    </i>
  )
}

export default IconButton

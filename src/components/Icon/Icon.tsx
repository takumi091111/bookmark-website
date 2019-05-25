/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './Icon.css'
import { Props } from './types'

const Icon = (props: Props): JSX.Element => {
  const { children, onClick } = props

  return (
    <i css={style} onClick={onClick}>
      {children}
    </i>
  )
}

export default Icon

import { jsx } from '@emotion/core'
import { style } from './Header.css'
import { Props } from './types'

const Header = ({ children }: Props): JSX.Element => (
  <div css={style}>{children}</div>
)

export default Header

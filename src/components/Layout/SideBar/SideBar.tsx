import { jsx } from '@emotion/core'
import { style } from './SideBar.css'
import { Props } from './types'

const SideBar = ({ children }: Props): JSX.Element => (
  <div css={style}>{children}</div>
)

export default SideBar

import { jsx } from '@emotion/core'
import { style } from './SideBar.css'
import { Props } from './types'

const SideBar = ({ children }: Props): JSX.Element => (
  <aside css={style}>{children}</aside>
)

export default SideBar

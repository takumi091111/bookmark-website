import { jsx } from '@emotion/core'
import { style } from './Layout.css'
import { Props } from './types'

import { Header } from './Header'
import { SideBar } from './SideBar'
import { Main } from './Main'

const Layout = ({ children }: Props): JSX.Element => (
  <div css={style}>{children}</div>
)

Layout.Header = Header
Layout.SideBar = SideBar
Layout.Main = Main

export default Layout

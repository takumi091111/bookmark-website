/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './Layout.css'
import { Props } from './types'

const Layout = (props: Props): JSX.Element => (
  <div css={style}>{props.children}</div>
)

export default Layout

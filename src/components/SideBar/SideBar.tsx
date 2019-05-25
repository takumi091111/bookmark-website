/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './SideBar.css'
import { Props } from './types'

const SideBar = (props: Props): JSX.Element => {
  const { children } = props

  return <aside css={style}>{children}</aside>
}

export default SideBar

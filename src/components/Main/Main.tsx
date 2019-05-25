/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './Main.css'
import { Props } from './types'

const Main = (props: Props): JSX.Element => {
  const { children } = props

  return (
    <div css={style}>
      <main>{children}</main>
    </div>
  )
}

export default Main

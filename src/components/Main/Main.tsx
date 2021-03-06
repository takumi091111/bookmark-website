import { jsx } from '@emotion/core'
import { style } from './Main.css'
import { Props } from './types'

const Main = ({ children }: Props): JSX.Element => (
  <div css={style}>
    <main>{children}</main>
  </div>
)

export default Main

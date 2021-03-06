import { jsx } from '@emotion/core'
import { MouseEvent } from 'react'
import { style } from './Panel.css'
import { Props } from './types'

const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
  event.stopPropagation()
}

const Panel = ({ children }: Props): JSX.Element => (
  <div css={style} onClick={handleClick}>
    {children}
  </div>
)

export default Panel

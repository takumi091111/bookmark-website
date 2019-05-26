/** @jsx jsx */
import { jsx } from '@emotion/core'
import { MouseEvent } from 'react'
import { style } from './Panel.css'
import { Props } from './types'

const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
  event.stopPropagation()
}

const Panel = (props: Props): JSX.Element => {
  const { children, theme } = props
  return (
    <div css={style(theme)} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Panel

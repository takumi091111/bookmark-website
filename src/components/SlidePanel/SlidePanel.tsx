/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { style } from './SlidePanel.css'
import { Props } from './types'
import { Panel } from './Panel'

const SlidePanel = (props: Props): JSX.Element => {
  const { children, isOpen, onOutsideClick } = props

  const overrideStyle = css`
    ${style}
    transform: translate3d(${isOpen ? 0 : -100}vw, 0, 0);
  `

  return (
    <div css={overrideStyle} onClick={onOutsideClick}>
      <Panel>{children}</Panel>
    </div>
  )
}

export default SlidePanel

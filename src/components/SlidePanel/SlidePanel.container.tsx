import * as React from 'react'
import { Subscribe } from 'unstated'
import { SlidePanelContainer } from '../../containers/SlidePanel'
import SlidePanelComponent from './SlidePanel'
import { ContainerProps } from './types'

const SlidePanel = (props: ContainerProps): JSX.Element => (
  <Subscribe to={[SlidePanelContainer]}>
    {(container: SlidePanelContainer) => {
      const { children } = props
      const { isOpen } = container.state

      return (
        <SlidePanelComponent
          isOpen={isOpen}
          onOutsideClick={() => container.toggle()}>
          {children}
        </SlidePanelComponent>
      )
    }}
  </Subscribe>
)

export default SlidePanel

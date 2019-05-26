import * as React from 'react'
import { Subscribe } from 'unstated'
import { ThemeContainer } from '../../containers/Theme'
import { SlidePanelContainer } from '../../containers/SlidePanel'
import SlidePanelComponent from './SlidePanel'
import { Panel } from '../Panel'
import { ContainerProps } from './types'

const SlidePanel = (props: ContainerProps): JSX.Element => (
  <Subscribe to={[ThemeContainer, SlidePanelContainer]}>
    {(
      themeContainer: ThemeContainer,
      slidePanelContainer: SlidePanelContainer
    ) => {
      const { children } = props
      const { isOpen } = slidePanelContainer.state

      return (
        <SlidePanelComponent
          isOpen={isOpen}
          onOutsideClick={() => slidePanelContainer.toggle()}>
          <Panel theme={themeContainer.state.theme}>{children}</Panel>
        </SlidePanelComponent>
      )
    }}
  </Subscribe>
)

export default SlidePanel

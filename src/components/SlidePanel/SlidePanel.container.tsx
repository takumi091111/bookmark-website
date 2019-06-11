import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import { ContainerProps } from './types'
import { Panel } from '~/components/Panel'
import SlidePanel from './SlidePanel'

const SlidePanelContainer = (props: ContainerProps): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { children } = props
      const { isOpen, theme } = container.state

      return (
        <SlidePanel
          isOpen={isOpen}
          onOutsideClick={() => container.toggleSidePanel()}>
          <Panel theme={theme}>{children}</Panel>
        </SlidePanel>
      )
    }}
  </Subscribe>
)

export default SlidePanelContainer

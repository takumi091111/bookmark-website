import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import { Props } from './types'
import SideBar from './SideBar'

const SideBarContainer = (props: Props): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { children } = props
      const { theme } = container.state

      return <SideBar theme={theme}>{children}</SideBar>
    }}
  </Subscribe>
)

export default SideBarContainer

import * as React from 'react'
import { Subscribe } from 'unstated'
import { ThemeContainer } from '../../containers/Theme'
import SideBarComponent from './SideBar'
import { Props } from './types'

const SideBar = (props: Props): JSX.Element => (
  <Subscribe to={[ThemeContainer]}>
    {(container: ThemeContainer) => {
      const { children } = props
      const { theme } = container.state

      return <SideBarComponent theme={theme}>{children}</SideBarComponent>
    }}
  </Subscribe>
)

export default SideBar

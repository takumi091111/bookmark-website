import * as React from 'react'
import { Subscribe } from 'unstated'
import { ThemeContainer } from '../../containers/Theme'
import MainComponent from './Main'
import { Props } from './types'

const Main = (props: Props): JSX.Element => (
  <Subscribe to={[ThemeContainer]}>
    {(container: ThemeContainer) => {
      const { children } = props
      const { theme } = container.state

      return <MainComponent theme={theme}>{children}</MainComponent>
    }}
  </Subscribe>
)

export default Main

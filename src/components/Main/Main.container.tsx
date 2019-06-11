import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import { Props } from './types'
import Main from './Main'

const MainContainer = (props: Props): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { children } = props
      const { theme } = container.state

      return <Main theme={theme}>{children}</Main>
    }}
  </Subscribe>
)

export default MainContainer

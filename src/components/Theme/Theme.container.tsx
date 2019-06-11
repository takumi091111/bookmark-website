import { jsx, Global } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import { style } from './Theme.css'

const ThemeContainer = (): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { theme } = container.state

      return <Global styles={style(theme)} />
    }}
  </Subscribe>
)

export default ThemeContainer

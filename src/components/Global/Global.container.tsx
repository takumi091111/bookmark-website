/** @jsx jsx */
import { jsx, Global as GlobalComponent } from '@emotion/core'
import { Subscribe } from 'unstated'
import { ThemeContainer } from '../../containers/Theme'
import { style } from './Global.css'

const Global = (): JSX.Element => (
  <Subscribe to={[ThemeContainer]}>
    {(container: ThemeContainer) => {
      const { theme } = container.state

      return <GlobalComponent styles={style(theme)} />
    }}
  </Subscribe>
)

export default Global

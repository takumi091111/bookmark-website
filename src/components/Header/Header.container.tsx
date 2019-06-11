import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import Header from './Header'

const HeaderContainer = (): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { searchQuery, theme } = container.state

      const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ): void => {
        container.changeSearchQuery(event.currentTarget.value)
      }

      return (
        <Header
          theme={theme}
          searchQuery={searchQuery}
          onMenuClick={() => container.toggleSidePanel()}
          onSearchInputChange={handleSearchInputChange}
          onSearchSubmit={() => container.search()}
        />
      )
    }}
  </Subscribe>
)

export default HeaderContainer

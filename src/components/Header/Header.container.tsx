import * as React from 'react'
import { Subscribe } from 'unstated'
import { ThemeContainer } from '../../containers/Theme'
import { SearchContainer } from '../../containers/Search'
import { SlidePanelContainer } from '../../containers/SlidePanel'
import HeaderComponent from './Header'

const Header = (): JSX.Element => (
  <Subscribe to={[ThemeContainer, SearchContainer, SlidePanelContainer]}>
    {(
      themeContainer: ThemeContainer,
      searchContainer: SearchContainer,
      slidePanelContainer: SlidePanelContainer
    ) => {
      const { theme } = themeContainer.state
      const { searchQuery } = searchContainer.state

      const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ): void => {
        searchContainer.changeQuery(event.currentTarget.value)
      }

      return (
        <HeaderComponent
          theme={theme}
          searchQuery={searchQuery}
          onMenuClick={() => slidePanelContainer.toggle()}
          onSearchInputChange={handleSearchInputChange}
          onSearchSubmit={() => searchContainer.search()}
        />
      )
    }}
  </Subscribe>
)

export default Header

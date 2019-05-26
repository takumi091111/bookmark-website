import * as React from 'react'
import { Subscribe } from 'unstated'
import { SearchContainer } from '../../containers/Search'
import { SlidePanelContainer } from '../../containers/SlidePanel'
import HeaderComponent from './Header'

const Header = (): JSX.Element => (
  <Subscribe to={[SearchContainer, SlidePanelContainer]}>
    {(
      searchContainer: SearchContainer,
      slidePanelContainer: SlidePanelContainer
    ) => {
      const { searchQuery } = searchContainer.state

      const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ): void => {
        searchContainer.changeQuery(event.currentTarget.value)
      }

      return (
        <HeaderComponent
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

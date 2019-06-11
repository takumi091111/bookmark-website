import { jsx } from '@emotion/core'
import { useState, Fragment } from 'react'
import { Props } from './types'
import Default from './Default'
import Searching from './Searching'

const Mobile = (props: Props): JSX.Element => {
  const {
    searchQuery,
    onMenuClick,
    onSearchInputChange,
    onSearchSubmit
  } = props

  const [isSearching, setIsSearching] = useState(false)
  const toggleSearch = (): void => setIsSearching(!isSearching)

  return (
    <Fragment>
      {isSearching ? (
        <Searching
          searchQuery={searchQuery}
          onSearchInputChange={onSearchInputChange}
          onSearchSubmit={onSearchSubmit}
          onBackClick={toggleSearch}
        />
      ) : (
        <Default onMenuClick={onMenuClick} onSearchClick={toggleSearch} />
      )}
    </Fragment>
  )
}

export default Mobile

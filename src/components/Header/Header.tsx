import { jsx } from '@emotion/core'
import { style } from './Header.css'
import { Props } from './types'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

const Header = (props: Props): JSX.Element => {
  const {
    searchQuery,
    onSearchInputChange,
    onSearchSubmit,
    onMenuClick
  } = props

  return (
    <header css={style}>
      <Desktop
        searchQuery={searchQuery}
        onSearchInputChange={onSearchInputChange}
        onSearchSubmit={onSearchSubmit}
      />
      <Mobile
        searchQuery={searchQuery}
        onSearchInputChange={onSearchInputChange}
        onSearchSubmit={onSearchSubmit}
        onMenuClick={onMenuClick}
      />
    </header>
  )
}

export default Header

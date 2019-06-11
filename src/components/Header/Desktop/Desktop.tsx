import { jsx } from '@emotion/core'
import { style } from './Desktop.css'
import { Props } from './types'

import SearchInput from '../../SearchInput/SearchInput'
import Icon from '../../IconButton/IconButton'
import { IoIosSearch } from 'react-icons/io'

const Desktop = (props: Props): JSX.Element => {
  const { searchQuery, onSearchInputChange, onSearchSubmit } = props

  return (
    <div css={style}>
      <Icon onClick={onSearchSubmit}>
        <IoIosSearch />
      </Icon>
      <SearchInput
        value={searchQuery}
        onChange={onSearchInputChange}
        onEnterKeyDown={onSearchSubmit}
      />
    </div>
  )
}

export default Desktop

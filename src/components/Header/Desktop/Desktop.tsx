/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './Desktop.css'
import { Props } from './types'

import SearchInput from '../../SearchInput/SearchInput'
import Icon from '../../Icon/Icon'
import { IoIosSearch } from 'react-icons/io'

const Desktop = (props: Props): JSX.Element => {
  const { searchQuery, onSearchInputChange, onSearchSubmit } = props

  return (
    <div css={style}>
      <SearchInput
        value={searchQuery}
        onChange={onSearchInputChange}
        onEnterKeyDown={onSearchSubmit}
      />
      <Icon onClick={onSearchSubmit}>
        <IoIosSearch />
      </Icon>
    </div>
  )
}

export default Desktop

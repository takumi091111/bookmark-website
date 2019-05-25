/** @jsx jsx */
import { jsx } from '@emotion/core'
import { style } from './Mobile.css'
import { SearchingProps } from './types'
import SearchInput from '../../SearchInput/SearchInput'
import Icon from '../../Icon/Icon'
import { IoIosArrowRoundBack, IoIosSearch } from 'react-icons/io'

const Searching = (props: SearchingProps): JSX.Element => {
  const {
    searchQuery,
    onBackClick,
    onSearchInputChange,
    onSearchSubmit
  } = props

  return (
    <div css={style}>
      <Icon onClick={onBackClick}>
        <IoIosArrowRoundBack />
      </Icon>
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

export default Searching

import { jsx } from '@emotion/core'
import { style } from './Mobile.css'
import { DefaultProps } from './types'
import Icon from '../../IconButton/IconButton'
import { IoIosMenu, IoIosSearch } from 'react-icons/io'

const Default = (props: DefaultProps): JSX.Element => {
  const { onMenuClick, onSearchClick } = props

  return (
    <div css={style}>
      <Icon onClick={onMenuClick}>
        <IoIosMenu />
      </Icon>
      <Icon onClick={onSearchClick}>
        <IoIosSearch />
      </Icon>
    </div>
  )
}

export default Default

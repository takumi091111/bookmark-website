import { jsx } from '@emotion/core'
import { style } from './SearchInput.css'
import { Props } from './types'

const placeholder = 'Search for...'

const SearchInput = (props: Props): JSX.Element => {
  const { value, onChange, onEnterKeyDown } = props

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    // Enterキー以外は無効
    if (event.keyCode !== 13) return
    // 検索処理
    onEnterKeyDown && onEnterKeyDown(event)
    event.preventDefault()
  }

  return (
    <input
      type="text"
      css={style}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchInput

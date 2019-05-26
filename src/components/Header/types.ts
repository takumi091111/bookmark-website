import { MouseEvent, ChangeEvent, KeyboardEvent } from 'react'
import { Theme } from '../../interfaces/Theme'

export interface Props {
  searchQuery: string
  theme?: Theme
  onMenuClick: (event: MouseEvent<HTMLDivElement>) => void
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void
}

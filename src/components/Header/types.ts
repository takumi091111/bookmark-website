import { MouseEvent, ChangeEvent, KeyboardEvent } from 'react'

export interface Props {
  searchQuery: string
  onMenuClick: (event: MouseEvent<HTMLDivElement>) => void
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void
}

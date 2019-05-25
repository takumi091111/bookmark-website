import { ChangeEvent, MouseEvent, KeyboardEvent } from 'react'

export interface Props {
  searchQuery: string
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void
}

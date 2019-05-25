import { MouseEvent, ChangeEvent, KeyboardEvent } from 'react'

export interface DefaultProps {
  onMenuClick: (event: MouseEvent<HTMLDivElement>) => void
  onSearchClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface SearchingProps {
  searchQuery: string
  onBackClick?: (event: MouseEvent<HTMLDivElement>) => void
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void
}

export type Props = DefaultProps & SearchingProps

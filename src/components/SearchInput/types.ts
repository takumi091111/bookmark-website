import { ChangeEvent, KeyboardEvent } from 'react'

export interface Props {
  value: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onEnterKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

import { MouseEvent } from 'react'

export interface Props {
  item: string
  onClick?: (event: MouseEvent<HTMLLIElement>) => void
}

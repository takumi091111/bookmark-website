import { ReactNode, MouseEvent } from 'react'

export interface Props {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  border?: boolean
  lastBorder?: boolean
  onClick?: (event: MouseEvent<HTMLLIElement>) => void
}

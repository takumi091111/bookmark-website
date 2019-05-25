import { ReactNode, MouseEvent } from 'react'

export interface Props {
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

import { ReactNode, MouseEvent } from 'react'

export interface Props {
  children?: ReactNode
  isOpen?: boolean
  onOutsideClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface ContainerProps {
  children?: ReactNode
}

import { ReactNode, MouseEvent } from 'react'
import { Theme } from '../../interfaces/Theme'

export interface Props {
  children?: ReactNode
  isOpen?: boolean
  theme?: Theme
  onOutsideClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface ContainerProps {
  children?: ReactNode
}

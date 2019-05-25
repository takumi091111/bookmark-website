import { ReactNode, MouseEvent } from 'react'

export interface Props {
  children?: ReactNode
  isOpen?: boolean
  onOutsideClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface ContainerProps {
  children?: ReactNode
}

export interface State {
  isPanelOpen: boolean
}

export interface StateProps {
  isOpen: boolean
}

export interface DispatchProps {
  onItemClick: (event: MouseEvent<HTMLLIElement>) => void
  onOutsideClick: (event: MouseEvent<HTMLDivElement>) => void
}

export interface Props {
  items: string[]
  onItemClick: (index: number) => void
}

export interface ContainerProps {
  isToggleSlidePanel?: boolean
}

export interface State {
  tags: string[]
}

export interface StateProps {
  items: string[]
}

export interface DispatchProps {
  onItemClick: (index: number) => void
}

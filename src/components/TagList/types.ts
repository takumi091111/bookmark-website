export interface Props {
  items: string[]
  onItemClick: (index: number) => void
}

export interface ContainerProps {
  toggleable?: boolean
}

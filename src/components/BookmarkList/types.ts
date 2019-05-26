import { Bookmark } from '../../interfaces/Bookmark'

export interface Props {
  items: Bookmark[]
  onItemClick: (index: number) => void
}

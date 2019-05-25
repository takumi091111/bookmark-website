import { Bookmark } from '../../interfaces/Bookmark'

export interface Props {
  items: Bookmark[]
  onItemClick: (index: number) => void
}

export interface State {
  bookmarks: Bookmark[]
}

export interface StateProps {
  items: Bookmark[]
}

export interface DispatchProps {
  onItemClick: (index: number) => void
}

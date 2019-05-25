import { Bookmark } from '../../../interfaces/Bookmark'

export interface Props {
  item: Bookmark
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
}

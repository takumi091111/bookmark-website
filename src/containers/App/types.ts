import { Tag } from '~/interfaces/Tag'
import { Bookmark } from '~/interfaces/Bookmark'
import { Theme } from '~/interfaces/Theme'

export interface AppState {
  tags: Tag[]
  bookmarks: Bookmark[]
  searchQuery: string
  isOpen: boolean
  theme: Theme
}

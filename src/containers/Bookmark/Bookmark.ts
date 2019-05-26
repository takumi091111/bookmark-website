import { Container } from 'unstated'
import { BookmarkState } from './types'
import { Bookmark } from '../../interfaces/Bookmark'
import { Bookmarks } from '../../mocks/bookmarks'

export class BookmarkContainer extends Container<BookmarkState> {
  public state: BookmarkState = {
    bookmarks: Bookmarks
  }

  public addBookmark(bookmark: Bookmark): void {
    this.setState({ bookmarks: [...this.state.bookmarks, bookmark] })
  }
}

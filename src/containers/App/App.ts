import { Container } from 'unstated'
import { Tag, Bookmark, Theme } from '~/interfaces'
import { Tags, Bookmarks } from '~/mocks'
import { light } from '~/styles/colors'
import { AppState } from './types'

export class AppContainer extends Container<AppState> {
  public state: AppState = {
    tags: Tags,
    bookmarks: Bookmarks,
    searchQuery: '',
    isOpen: false,
    theme: light
  }

  public addBookmark(bookmark: Bookmark): void {
    this.setState({ bookmarks: [...this.state.bookmarks, bookmark] })
  }

  public addTag(tag: Tag): void {
    this.setState({ tags: [...this.state.tags, tag] })
  }

  public changeSearchQuery(searchQuery: string): void {
    this.setState({ searchQuery })
  }

  public setTheme(theme: Theme): void {
    this.setState({ theme })
  }

  public search(): void {
    console.log('query', this.state.searchQuery)
  }

  public toggleSidePanel(): void {
    this.setState({ isOpen: !this.state.isOpen })
  }
}

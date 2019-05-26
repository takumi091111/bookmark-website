import { Container } from 'unstated'
import { SearchState } from './types'

export class SearchContainer extends Container<SearchState> {
  public state: SearchState = {
    searchQuery: ''
  }

  public changeQuery(searchQuery: string): void {
    this.setState({ searchQuery })
  }

  public search(): void {
    console.log('query', this.state.searchQuery)
  }
}

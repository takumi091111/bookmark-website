import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { AppContainer } from '~/containers/App'
import BookmarkList from './BookmarkList'

const BookmarkListContainer = (): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { bookmarks } = container.state

      const handleItemClick = (index: number): void => {
        console.table(bookmarks[index])
      }

      return <BookmarkList items={bookmarks} onItemClick={handleItemClick} />
    }}
  </Subscribe>
)

export default BookmarkListContainer

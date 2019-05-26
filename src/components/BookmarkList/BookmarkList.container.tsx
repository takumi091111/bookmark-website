import * as React from 'react'
import { Subscribe } from 'unstated'
import { BookmarkContainer } from '../../containers/Bookmark'
import BookmarkListComponent from './BookmarkList'

const BookmarkList = (): JSX.Element => (
  <Subscribe to={[BookmarkContainer]}>
    {(container: BookmarkContainer) => {
      const bookmarks = container.state.bookmarks

      const handleItemClick = (index: number): void => {
        console.table(bookmarks[index])
      }

      return (
        <BookmarkListComponent
          items={bookmarks}
          onItemClick={handleItemClick}
        />
      )
    }}
  </Subscribe>
)

export default BookmarkList

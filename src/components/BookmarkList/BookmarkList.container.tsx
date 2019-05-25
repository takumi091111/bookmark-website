import * as React from 'react'
import { Dispatch } from 'redux'
import { Provider, connect } from 'react-redux'
import { store } from '../../store/index'
import { State, StateProps, DispatchProps } from './types'
import BookmarkList from './BookmarkList'

const mapStateToProps = (state: State): StateProps => ({
  items: state.bookmarks
})

const mapDispatchToProps = (_dispatch: Dispatch): DispatchProps => ({
  onItemClick: (index: number): void => {
    console.log(store.getState().bookmarks[index])
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList)

const BookmarkListContainer = (): JSX.Element => (
  <Provider store={store}>
    <Container />
  </Provider>
)

export default BookmarkListContainer

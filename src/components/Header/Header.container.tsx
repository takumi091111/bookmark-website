import * as React from 'react'
import { Dispatch } from 'redux'
import { Provider, connect } from 'react-redux'
import { store, SET_SEARCH_QUERY, TOGGLE_SLIDE_PANEL } from '../../store/index'
import { State, StateProps, DispatchProps } from './types'
import Header from './Header'

const mapStateToProps = (state: State): StateProps => ({
  searchQuery: state.searchQuery
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onMenuClick: (_event): void => {
    dispatch(TOGGLE_SLIDE_PANEL(store.getState().isPanelOpen))
  },
  onSearchInputChange: (event): void => {
    dispatch(SET_SEARCH_QUERY(event.currentTarget.value))
  },
  onSearchSubmit: (_event): void => {
    console.log('query', store.getState().searchQuery)
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

const HeaderContainer = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default HeaderContainer

import * as React from 'react'
import { Dispatch } from 'redux'
import { Provider, connect } from 'react-redux'
import { store, TOGGLE_SLIDE_PANEL } from '../../store/index'
import { ContainerProps, State, StateProps, DispatchProps } from './types'
import SlidePanel from './SlidePanel'

const mapStateToProps = (state: State): StateProps => ({
  isOpen: state.isPanelOpen
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onItemClick: event => {
    console.log(event.currentTarget.children[0])
    dispatch(TOGGLE_SLIDE_PANEL(store.getState().isPanelOpen))
  },
  onOutsideClick: _event => {
    dispatch(TOGGLE_SLIDE_PANEL(store.getState().isPanelOpen))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(SlidePanel)

const SlidePanelContainer = (props: ContainerProps): JSX.Element => (
  <Provider store={store}>
    <Container>{props.children}</Container>
  </Provider>
)

export default SlidePanelContainer

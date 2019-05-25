import * as React from 'react'
import { Dispatch } from 'redux'
import { Provider, connect } from 'react-redux'
import { store, TOGGLE_SLIDE_PANEL } from '../../store/index'
import { ContainerProps, State, StateProps, DispatchProps } from './types'
import TagList from './TagList'

const mapStateToProps = (state: State): StateProps => ({
  items: state.tags
})

const TagListContainer = (props: ContainerProps): JSX.Element => {
  const { isToggleSlidePanel } = props

  const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    onItemClick: (index: number) => {
      console.log(store.getState().tags[index])

      if (isToggleSlidePanel) {
        dispatch(TOGGLE_SLIDE_PANEL(store.getState().isPanelOpen))
      }
    }
  })

  const Container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagList)

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default TagListContainer

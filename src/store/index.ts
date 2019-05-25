import { createStore } from 'redux'
import { Bookmark } from '../interfaces/Bookmark'
import { Bookmarks } from '../mocks/bookmarks'

interface State {
  searchQuery: string
  isPanelOpen: boolean
  tags: string[]
  bookmarks: Bookmark[]
}

interface UndefinedableState {
  searchQuery?: string
  isPanelOpen?: boolean
  tags?: string[]
  bookmarks?: Bookmark[]
}

interface Action {
  type: string
  payload: State
}

interface UndefinedableAction {
  type: string
  payload: UndefinedableState
}

const initialState: State = {
  searchQuery: '',
  isPanelOpen: false,
  tags: ['A', 'B', 'C'],
  bookmarks: Bookmarks
}

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload.searchQuery }
    case 'SET_BOOKMARK_TAG_LIST':
      return { ...state, tags: action.payload.tags }
    case 'SET_BOOKMARK_LIST':
      return { ...state, bookmarks: action.payload.bookmarks }
    case 'TOGGLE_SLIDE_PANEL':
      return { ...state, isPanelOpen: action.payload.isPanelOpen }
    default:
      return state
  }
}

export const store = createStore(reducer)

export const SET_SEARCH_QUERY = (searchQuery: string): UndefinedableAction => ({
  type: 'SET_SEARCH_QUERY',
  payload: {
    searchQuery
  }
})

export const SET_BOOKMARK_TAG_LIST = (tags: string[]): UndefinedableAction => ({
  type: 'SET_BOOKMARK_TAG_LIST',
  payload: {
    tags
  }
})

export const SET_BOOKMARK_LIST = (
  bookmarks: Bookmark[]
): UndefinedableAction => ({
  type: 'SET_BOOKMARK_LIST',
  payload: {
    bookmarks
  }
})

export const TOGGLE_SLIDE_PANEL = (
  isPanelOpen: boolean
): UndefinedableAction => ({
  type: 'TOGGLE_SLIDE_PANEL',
  payload: {
    isPanelOpen: !isPanelOpen
  }
})

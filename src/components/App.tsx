import * as React from 'react'
import { Provider } from 'unstated'

import { Layout } from './Layout'
import { Main } from './Main'
import { SideBar } from './SideBar'

import { HeaderContainer } from './Header'
import { SlidePanelContainer } from './SlidePanel'
import { TagListContainer } from './TagList'
import { BookmarkListContainer } from './BookmarkList'

const App = (): JSX.Element => (
  <Provider>
    <Layout>
      <HeaderContainer />
      <SideBar>
        <TagListContainer />
      </SideBar>
      <SlidePanelContainer>
        <TagListContainer toggleable />
      </SlidePanelContainer>
      <Main>
        <BookmarkListContainer />
      </Main>
    </Layout>
  </Provider>
)

export default App

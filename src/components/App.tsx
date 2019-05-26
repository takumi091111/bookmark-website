import * as React from 'react'
import { Provider } from 'unstated'

import { Layout } from './Layout'
import { MainContainer } from './Main'
import { SideBarContainer } from './SideBar'

import { HeaderContainer } from './Header'
import { SlidePanelContainer } from './SlidePanel'
import { TagListContainer } from './TagList'
import { BookmarkListContainer } from './BookmarkList'

const App = (): JSX.Element => (
  <Provider>
    <Layout>
      <HeaderContainer />
      <SideBarContainer>
        <TagListContainer />
      </SideBarContainer>
      <SlidePanelContainer>
        <TagListContainer toggleable />
      </SlidePanelContainer>
      <MainContainer>
        <BookmarkListContainer />
      </MainContainer>
    </Layout>
  </Provider>
)

export default App

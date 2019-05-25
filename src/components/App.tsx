import * as React from 'react'
import Layout from './Layout/Layout'
import Main from './Main/Main'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header.container'
import TagList from './TagList/TagList.container'
import SlidePanel from './SlidePanel/SlidePanel.container'
import BookmarkList from './BookmarkList/BookmarkList.container'

const App = (): JSX.Element => (
  <Layout>
    <Header />
    <SideBar>
      <TagList />
    </SideBar>
    <SlidePanel>
      <TagList isToggleSlidePanel />
    </SlidePanel>
    <Main>
      <BookmarkList />
    </Main>
  </Layout>
)

export default App

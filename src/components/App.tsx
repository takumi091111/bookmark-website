/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { Provider } from 'unstated'

import { Layout } from './Layout'
import { MainContainer } from './Main'
import { SideBarContainer } from './SideBar'

import { HeaderContainer } from './Header'
import { SlidePanelContainer } from './SlidePanel'
import { TagListContainer } from './TagList'
import { BookmarkListContainer } from './BookmarkList'

const globalStyle = css`
  html,
  body {
    font-family: 'Noto Serif JP', serif;
  }
`

const App = (): JSX.Element => (
  <Provider>
    <Global styles={globalStyle} />
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

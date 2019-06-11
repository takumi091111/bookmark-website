import { jsx } from '@emotion/core'

import Layout from './Layout'
import { MainContainer } from '~/components/Main'
import { SideBarContainer } from '~/components/SideBar'
import { HeaderContainer } from '~/components/Header'
import { TagListContainer } from '~/components/TagList'
import { BookmarkListContainer } from '~/components/BookmarkList'

const LayoutContainer = (): JSX.Element => (
  <Layout>
    <Layout.Header>
      <HeaderContainer />
    </Layout.Header>
    <Layout.SideBar>
      <SideBarContainer>
        <TagListContainer />
      </SideBarContainer>
    </Layout.SideBar>
    <Layout.Main>
      <MainContainer>
        <BookmarkListContainer />
      </MainContainer>
    </Layout.Main>
  </Layout>
)

export default LayoutContainer

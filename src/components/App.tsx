import { jsx } from '@emotion/core'
import { Provider } from 'unstated'

import { ThemeContainer } from './Theme'
import { LayoutContainer } from './Layout'
import { SlidePanelContainer } from './SlidePanel'
import { TagListContainer } from './TagList'

const App = (): JSX.Element => (
  <Provider>
    <ThemeContainer />
    <LayoutContainer />
    <SlidePanelContainer>
      <TagListContainer toggleable />
    </SlidePanelContainer>
  </Provider>
)

export default App

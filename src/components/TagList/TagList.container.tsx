import { jsx } from '@emotion/core'
import { Subscribe } from 'unstated'
import { ContainerProps } from './types'
import { AppContainer } from '~/containers/App'
import TagList from './TagList'

const TagListContainer = (props: ContainerProps): JSX.Element => (
  <Subscribe to={[AppContainer]}>
    {(container: AppContainer) => {
      const { toggleable } = props
      const { tags } = container.state

      const handleItemClick = (index: number): void => {
        console.table(tags[index])
        if (toggleable) {
          container.toggleSidePanel()
        }
      }

      return <TagList items={tags} onItemClick={handleItemClick} />
    }}
  </Subscribe>
)

export default TagListContainer

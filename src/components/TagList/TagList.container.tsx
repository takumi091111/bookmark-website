import * as React from 'react'
import { Subscribe } from 'unstated'
import { TagContainer } from '../../containers/Tag'
import TagListComponent from './TagList'

const TagList = (): JSX.Element => (
  <Subscribe to={[TagContainer]}>
    {(container: TagContainer) => {
      const { tags } = container.state

      const handleItemClick = (index: number): void => {
        console.table(tags[index])
      }

      return <TagListComponent items={tags} onItemClick={handleItemClick} />
    }}
  </Subscribe>
)

export default TagList

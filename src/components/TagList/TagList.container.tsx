import * as React from 'react'
import { Subscribe } from 'unstated'
import { TagContainer } from '../../containers/Tag'
import { SlidePanelContainer } from '../../containers/SlidePanel'
import TagListComponent from './TagList'
import { ContainerProps } from './types'

const TagList = (props: ContainerProps): JSX.Element => (
  <Subscribe to={[TagContainer, SlidePanelContainer]}>
    {(tagContainer: TagContainer, slidePanelContainer: SlidePanelContainer) => {
      const { toggleable } = props
      const { tags } = tagContainer.state

      const handleItemClick = (index: number): void => {
        console.table(tags[index])
        if (toggleable) {
          slidePanelContainer.toggle()
        }
      }

      return <TagListComponent items={tags} onItemClick={handleItemClick} />
    }}
  </Subscribe>
)

export default TagList

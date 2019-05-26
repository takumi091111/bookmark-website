import { Container } from 'unstated'
import { TagState } from './types'
import { Tag } from '../../interfaces/Tag'
import { Tags } from '../../mocks/tags'

export class TagContainer extends Container<TagState> {
  public state: TagState = {
    tags: Tags
  }

  public addTag(tag: Tag): void {
    this.setState({ tags: [...this.state.tags, tag] })
  }
}

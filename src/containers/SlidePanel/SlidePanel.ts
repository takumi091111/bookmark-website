import { Container } from 'unstated'
import { SlidePanelState } from './types'

export class SlidePanelContainer extends Container<SlidePanelState> {
  public state: SlidePanelState = {
    isOpen: false
  }

  public toggle(): void {
    this.setState({ isOpen: !this.state.isOpen })
  }
}

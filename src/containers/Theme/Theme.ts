import { Container } from 'unstated'
import { ThemeState } from './types'
import { Theme } from '../../interfaces/Theme'
import { light } from '../../styles/colors'

export class ThemeContainer extends Container<ThemeState> {
  public state: ThemeState = {
    theme: light
  }

  public setTheme(theme: Theme): void {
    this.setState({ theme })
  }
}

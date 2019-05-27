import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  html,
  body,
  #app {
    background-color: ${theme ? theme.colors.background : 'initial'};
    font-family: 'Noto Serif JP', serif;
  }

  #app {
    display: flex;
    justify-content: center;
  }
`

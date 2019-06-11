import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '~/interfaces/Theme'

export const style = (theme: Theme): SerializedStyles => css`
  :root {
    --color_base: ${theme.colors.text};
    --background-color_base: ${theme.colors.background};
    --background-color_hover: ${theme.colors.highlight};
    --border-color_base: ${theme.colors.border};
  }

  html,
  body,
  #app {
    background-color: var(--background-color_base, initial);
    font-family: 'Noto Serif JP', serif;
  }

  #app {
    display: flex;
    justify-content: center;
  }
`

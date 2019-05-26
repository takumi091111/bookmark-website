import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  color: ${theme ? theme.colors.text : 'inherit'};
  background-color: ${theme ? theme.colors.background : 'hotpink'};

  position: relative;
  width: 80%;
  height: 100%;

  overflow-y: scroll;

  a {
    color: ${theme ? theme.colors.text : 'inherit'};
  }

  li {
    &:hover:not(.tag-list-header) {
      background-color: ${theme ? theme.colors.highlight : 'green'};
    }
    border-color: ${theme ? theme.colors.border : 'inherit'};
  }
`

import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  color: ${theme ? theme.colors.text : 'inherit'};
  background-color: ${theme ? theme.colors.background : 'blue'};

  grid-column: 1 / 2;
  grid-row: 1 / 3;

  a {
    color: ${theme ? theme.colors.text : 'inherit'};
  }

  li {
    &:hover:not(.tag-list-header) {
      background-color: ${theme ? theme.colors.highlight : 'green'};
    }
    border-color: ${theme ? theme.colors.border : 'inherit'};
  }

  @media (max-width: 767px) {
    display: none;
  }
`

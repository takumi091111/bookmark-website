import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  color: ${theme ? theme.colors.text : 'inherit'};
  background-color: ${theme ? theme.colors.background : 'yellow'};

  padding: 10px;

  grid-column: 2 / 3;
  grid-row: 2 / 3;

  overflow-y: scroll;

  a {
    color: ${theme ? theme.colors.text : 'inherit'};
  }

  li {
    &:hover {
      background-color: ${theme ? theme.colors.highlight : 'red'};
    }
    border-color: ${theme ? theme.colors.border : 'inherit'};
  }

  @media (max-width: 767px) {
    grid-column: 1 / 2;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
    }
  }
`

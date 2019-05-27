import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  &:hover {
    overflow-y: auto;
  }

  color: ${theme ? theme.colors.text : 'inherit'};
  background-color: ${theme ? theme.colors.background : 'yellow'};

  padding: 10px;

  grid-column: 2 / 3;
  grid-row: 2 / 3;

  overflow-y: hidden;

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
    padding: 0 5px;

    grid-column: 1 / 2;

    overflow-y: scroll;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
    }
  }
`

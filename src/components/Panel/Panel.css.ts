import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

export const style = (theme?: Theme): SerializedStyles => css`
  &:hover {
    overflow-y: scroll;
  }

  color: ${theme ? theme.colors.text : 'inherit'};
  background-color: ${theme ? theme.colors.background : 'hotpink'};

  position: relative;
  width: 80%;
  height: 100%;

  overflow-y: hidden;

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
    overflow-y: scroll;
  }
`

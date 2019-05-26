import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '../../interfaces/Theme'

const desktopStyle = (theme?: Theme): SerializedStyles => css`
  background-color: ${theme ? theme.colors.background : 'red'};

  grid-column: 2 / 3;
  grid-row: 1 / 2;

  padding: 0 5px;
`

const mobileStyle = (theme?: Theme): SerializedStyles => css`
  background-color: ${theme ? theme.colors.background : 'purple'};

  grid-column: 1 / 2;
  grid-row: 1 / 2;

  position: sticky;
  top: 0;
`

export const style = (theme?: Theme): SerializedStyles => css`
  color: ${theme ? theme.colors.text : 'inherit'};
  border-bottom: 1px solid ${theme ? theme.colors.border : 'inherit'};

  z-index: 1;

  /* スマートフォン */
  @media (max-width: 767px) {
    ${mobileStyle(theme)}
  }

  /* デスクトップ */
  @media (min-width: 768px) {
    ${desktopStyle(theme)}
  }
`

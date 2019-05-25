import { css } from '@emotion/core'

export const style = css`
  background-color: blue;

  grid-column: 1 / 2;
  grid-row: 1 / 3;

  @media (max-width: 767px) {
    display: none;
  }
`

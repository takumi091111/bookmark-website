import { css } from '@emotion/core'

export const style = css`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  /* スマートフォン */
  @media (max-width: 767px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

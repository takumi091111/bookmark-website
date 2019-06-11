import { css } from '@emotion/core'

export const style = css`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  overflow-y: auto;

  /* スマートフォン */
  @media (max-width: 767px) {
    grid-column: 1 / 2;
  }
`

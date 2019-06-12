import { css } from '@emotion/core'

export const style = css`
  &:hover {
    overflow-y: auto;
  }

  grid-column: 2 / 3;
  grid-row: 2 / 3;

  overflow-y: hidden;

  /* スマートフォン */
  @media (max-width: 767px) {
    grid-column: 1 / 2;
    overflow-y: scroll;
  }
`

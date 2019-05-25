import { css } from '@emotion/core'

export const style = css`
  background-color: yellow;
  padding: 10px;

  grid-column: 2 / 3;
  grid-row: 2 / 3;

  overflow-y: scroll;

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

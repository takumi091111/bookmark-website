import { css } from '@emotion/core'

const desktopStyle = css`
  background-color: red;

  grid-column: 2 / 3;
  grid-row: 1 / 2;

  padding: 0 5px;
`

const mobileStyle = css`
  background-color: purple;

  grid-column: 1 / 2;
  grid-row: 1 / 2;

  position: sticky;
  top: 0;
`

export const style = css`
  z-index: 1;

  /* スマートフォン */
  @media (max-width: 767px) {
    ${mobileStyle}
  }

  /* デスクトップ */
  @media (min-width: 768px) {
    ${desktopStyle}
  }
`

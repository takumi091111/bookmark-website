import { css } from '@emotion/core'

const desktopStyle = css`
  background-color: var(--background-color_base, red);

  padding: 0 5px;
`

const mobileStyle = css`
  background-color: var(--background-color_base, purple);

  position: sticky;
  top: 0;
`

export const style = css`
  color: var(--color_base, inherit);
  border-bottom: 1px solid var(--border-color_base, inherit);

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

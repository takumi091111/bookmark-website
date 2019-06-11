import { css } from '@emotion/core'

export const style = css`
  color: var(--color_base, inherit);
  background-color: var(--background-color_base, blue);

  @media (max-width: 767px) {
    display: none;
  }
`

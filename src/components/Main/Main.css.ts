import { css } from '@emotion/core'

export const style = css`
  &:hover {
    overflow-y: auto;
  }

  color: var(--color_base, inherit);
  background-color: var(--background-color_base, yellow);

  padding: 10px;

  overflow-y: hidden;

  a {
    color: inherit;
  }

  @media (max-width: 767px) {
    padding: 0 5px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
    }
  }
`

import { css } from '@emotion/core'

export const style = css`
  &:hover {
    overflow-y: scroll;
  }

  color: var(--color_base, inherit);
  background-color: var(--background-color_base, hotpink);

  position: relative;
  width: 80%;
  height: 100%;

  overflow-y: hidden;

  @media (max-width: 767px) {
    overflow-y: scroll;
  }
`

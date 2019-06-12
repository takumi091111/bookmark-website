import { css } from '@emotion/core'

export const style = css`
  &:hover {
    overflow-y: auto;
  }

  background: transparent;

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  > div {
    box-shadow: 1px 0px 10px -1px rgba(0, 0, 0, 0.15);
  }

  transition: transform 0.35s ease;
  overflow-y: hidden;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
    overflow-y: scroll;
  }
`

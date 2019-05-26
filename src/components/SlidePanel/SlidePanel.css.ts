import { css } from '@emotion/core'

export const style = css`
  background: transparent;

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  > div {
    box-shadow: 1px 0px 10px -1px rgba(0, 0, 0, 0.3);
  }

  transition: transform 0.5s ease;

  overflow-y: hidden;
  z-index: 1;
`

import { css } from '@emotion/core'

export const style = css`
  color: inherit;
  background-color: transparent;

  font-family: inherit;

  width: calc(100% - 100px);
  height: 40px;
  border: none;

  padding: 0 10px;

  @media (min-width: 767px) {
    width: 100%;
  }
`

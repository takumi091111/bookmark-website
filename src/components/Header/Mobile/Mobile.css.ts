import { css } from '@emotion/core'

export const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`

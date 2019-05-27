import { css } from '@emotion/core'

export const style = css`
  &::placeholder {
    color: inherit;
  }

  color: inherit;
  background-color: transparent;

  font-size: 1em;
  font-family: inherit;

  width: calc(100% - 100px);
  height: 40px;
  border: none;

  padding: 0 10px;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }
`

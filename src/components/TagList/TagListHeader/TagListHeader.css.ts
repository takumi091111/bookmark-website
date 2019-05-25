import { css } from '@emotion/core'

export const style = css`
  &:last-of-type {
    border-bottom: 0px;
  }

  position: relative;
  width: 100%;
  height: 50px;

  h1 {
    position: absolute;

    width: 100%;
    height: 100%;

    text-indent: 1em;
    line-height: 50px;
  }

  border-bottom: 1px solid;
`

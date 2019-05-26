import { css } from '@emotion/core'

export const style = css`
  &:hover {
    background-color: green;
  }

  position: relative;
  width: 100%;
  height: 50px;

  transition: background-color 0.5s cubic-bezier(0, 0.5, 0, 1);

  a {
    position: absolute;

    width: 100%;
    height: 100%;

    text-indent: 1em;
    line-height: 50px;

    text-decoration: none;
  }
`

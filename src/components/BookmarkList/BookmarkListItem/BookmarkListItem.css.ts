import { css } from '@emotion/core'

export const style = css`
  &:last-of-type {
    border-bottom: 0px;
  }

  &:hover {
    background-color: red;
  }

  position: relative;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid;

  padding: 10px;

  transition: background-color 0.5s cubic-bezier(0, 0.5, 0, 1);

  h1 {
    font-size: 1.2em;
    height: 30px;
    line-height: 30px;
  }

  h2 {
    height: 30px;
    line-height: 30px;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    text-decoration: none;
  }
`

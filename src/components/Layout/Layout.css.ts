import { css } from '@emotion/core'

export const style = css`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1280px;

  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;

  overflow: hidden;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    padding: 0px;
  }
`

import { css, SerializedStyles } from '@emotion/core'

const sizes = {
  sm: {
    height: 50,
    padding: 0
  },
  md: {
    height: 80,
    padding: 10
  },
  lg: {
    height: 100,
    padding: 10
  }
}

const bookmarkStyle = css`
  h1 {
    font-size: 1.2em;
    height: 30px;
    line-height: 30px;
  }

  h2 {
    height: 30px;
    line-height: 30px;
  }
`

export const style = (
  size: 'sm' | 'md' | 'lg' = 'sm',
  border: boolean = false,
  lastBorder: boolean = true
): SerializedStyles => css`
  &:last-of-type {
    border-bottom: ${border && lastBorder ? 1 : 0}px solid
      var(--border-color_base, inherit);
  }

  &:hover {
    background-color: var(--background-color_hover, green);
  }

  position: relative;
  width: 100%;
  height: ${sizes[size].height}px;
  border-bottom: ${border ? 1 : 0}px solid var(--border-color_base, inherit);

  padding: ${sizes[size].padding}px;

  transition: background-color 0.5s cubic-bezier(0, 0.5, 0, 1);

  a {
    color: inherit;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    text-indent: 1em;
    line-height: ${sizes[size].height}px;

    text-decoration: none;
  }

  ${bookmarkStyle}
`

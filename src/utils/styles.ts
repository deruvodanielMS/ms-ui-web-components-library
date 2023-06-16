import { css } from 'lit'

export const setFont = (fontSize: number, lineHeight: number) =>
  css`
    font-size: ${fontSize}px;
    font-weight: inherit;
    line-height: ${lineHeight}px;
  `

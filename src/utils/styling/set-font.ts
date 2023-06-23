import { css } from 'lit'

export const setFont = (fontSize: number, lineHeight: number) =>
  css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `

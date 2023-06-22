import { css, unsafeCSS } from 'lit'

export const setAlign = (align: string, justify: string) =>
  css`
    align-items: ${unsafeCSS(align)};
    justify-content: ${unsafeCSS(justify)};
  `

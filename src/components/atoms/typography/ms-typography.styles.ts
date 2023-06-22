import { css } from 'lit'

import { setFont } from '~/utils'

//@TODO: modify styles with var on style-dictionary & theme

export const msTypographyStyles = css`
  h1 {
    ${setFont(56, 64)}
    font-weight: inherit
  }

  h2 {
    ${setFont(48, 56)}
    font-weight: inherit
  }

  h3 {
    ${setFont(40, 48)}
    font-weight: inherit
  }

  h4 {
    ${setFont(32, 40)}
    font-weight: inherit
  }

  h5 {
    ${setFont(28, 32)}
    font-weight: inherit
  }

  h6 {
    ${setFont(24, 28)}
    font-weight: inherit
  }

  p {
    ${setFont(17, 24)}
    font-weight: inherit
  }
`

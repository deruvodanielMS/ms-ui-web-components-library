import { css } from 'lit'

import { setFont } from '~/utils'

//@TODO: modify styles with var on style-dictionary & theme

export const msCheckboxStyles = css`
  h1 {
    ${setFont(56, 64)}
  }

  h2 {
    ${setFont(48, 56)}
  }

  h3 {
    ${setFont(40, 48)}
  }

  h4 {
    ${setFont(32, 40)}
  }

  h5 {
    ${setFont(28, 32)}
  }

  h6 {
    ${setFont(24, 28)}
  }

  p {
    ${setFont(17, 24)}
  }
`

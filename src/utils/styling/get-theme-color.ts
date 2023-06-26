import { unsafeCSS } from 'lit'

import type { MsColors } from '~/styles/tokens/default/colors'
import { defaultMSTheme } from '~/theme'

export const getThemeColor = (token: keyof MsColors) => {
  return unsafeCSS(`var(--${token}, ${defaultMSTheme.colors[token]})`)
}

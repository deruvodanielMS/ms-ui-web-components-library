// theme.ts
import Theme from '../typings/theme/theme'

import { colors } from './colors'
import { typography } from './typography'

const defaultTheme: Theme = {
  colors: colors,
  spacing: 8,
  typography: typography,
}

export default defaultTheme

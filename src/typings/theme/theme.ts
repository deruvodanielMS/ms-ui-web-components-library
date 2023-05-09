import type { themeColors } from './colors'
import type { themeTypography } from './typography'

type Theme = {
  colors: themeColors
  typography: themeTypography
  spacing: number
}

export default Theme

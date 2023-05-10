import type { ThemeColors } from './colors'
import type { ThemeTypography } from './typography'

type Theme = {
  colors: ThemeColors
  typography: ThemeTypography
  spacing: number
}

export default Theme

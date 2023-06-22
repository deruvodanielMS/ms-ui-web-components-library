import { borderRadius, type MsBorderRadius } from '~/styles/usable-tokens/border-radius'
import { borderWidths, type MsBorderWidths } from '~/styles/usable-tokens/border-width'
import { colors, type MsColors } from '~/styles/usable-tokens/color'
import { sizings, type MsSizings } from '~/styles/usable-tokens/sizing'
import { spacings, type MsSpacings } from '~/styles/usable-tokens/spacing'

export interface MSTheme {
  colors: MsColors
  sizings: MsSizings
  spacings: MsSpacings
  borderRadius: MsBorderRadius
  borderWidths: MsBorderWidths
}

export const defaultMSTheme: MSTheme = {
  colors,
  sizings,
  spacings,
  borderRadius,
  borderWidths,
}

import { borderRadiuses, type MsBorderRadiuses } from '~/styles/tokens/default/border-radiuses'
import { borderWidths, type MsBorderWidths } from '~/styles/tokens/default/border-widths'
import { colors, type MsColors } from '~/styles/tokens/default/colors'
import { sizings, type MsSizings } from '~/styles/tokens/default/sizings'
import { spacings, type MsSpacings } from '~/styles/tokens/default/spacings'
import { typographies, type MsTypographies } from '~/styles/tokens/default/typographies'

export interface MSTheme {
  colors: MsColors
  sizings: MsSizings
  spacings: MsSpacings
  borderRadiuses: MsBorderRadiuses
  borderWidths: MsBorderWidths
  typographies: MsTypographies
}

export const defaultMSTheme: MSTheme = {
  colors,
  sizings,
  spacings,
  borderRadiuses,
  borderWidths,
  typographies,
}

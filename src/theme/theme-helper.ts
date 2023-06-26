import type { MsColors } from '~/styles/tokens/default/colors'
import type { MsTypographies } from '~/styles/tokens/default/typographies'
import { flattenObject } from '~/utils'

export const extractColorProperties = (
  colors: MsColors,
): {
  [key in keyof MsColors]: {
    type: StringConstructor
  }
} => {
  const entries = Object.keys(colors).map((key) => [key, { type: String }])
  return Object.fromEntries(entries)
}

export const extractTypographiesProperties = (
  typographies: MsTypographies,
): {
  [key in keyof MsTypographies]: {
    type: StringConstructor
  }
} => {
  const entries = Object.keys(flattenObject(typographies)).map((key) => [key, { type: String }])
  return Object.fromEntries(entries)
}

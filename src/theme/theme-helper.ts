import type { MsColors } from '~/styles/usable-tokens/color'

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

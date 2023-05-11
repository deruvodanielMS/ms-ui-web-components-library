import { ThemeColors } from "~/typings/theme/colors"

export const extractCssVariables = (theme: ThemeColors) => {
  const entries = Object.entries(theme)
  const cssVariables = entries.reduce((acc, [key, value]) => {
    const subEntries = Object.entries(value)
    const subVars = subEntries.map(([subKey, subValue]) => `--${key}-${subKey}: ${subValue};`)
    return acc + subVars.join('\n') + '\n'
  }, '')
  return cssVariables
}

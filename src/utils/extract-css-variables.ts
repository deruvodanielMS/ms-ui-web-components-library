import type { Theme } from '~/typings/theme'

export const extractCssVariables = (theme: Theme) => {
  const entries = Object.entries(theme)
  const cssVariables = entries.reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      const subEntries = Object.entries(value)
      const subVars = subEntries.map(([subKey, subValue]) => {
        if (typeof subValue === 'object') {
          const subSubEntries = Object.entries(subValue)
          const subSubVars = subSubEntries.map(
            ([subSubKey, subSubValue]) => `--${key}-${subKey}-${subSubKey}: ${subSubValue};`,
          )
          return subSubVars.join('\n') + '\n'
        } else {
          return `--${key}-${subKey}: ${subValue};`
        }
      })
      return acc + subVars.join('\n') + '\n'
    } else {
      return acc + `--${key}: ${value};\n`
    }
  }, '')
  return cssVariables
}

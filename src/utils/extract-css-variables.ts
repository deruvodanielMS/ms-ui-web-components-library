export const extractCssVariables = (theme: any /*@TODO: update with MS theme Type*/) => {
  const entries = Object.entries(theme)
  const cssVariables = entries.reduce((acc, [key, value]) => {
    const subEntries = Object.entries(value)
    const subVars = subEntries.map(([subKey, subValue]) => `--${key}-${subKey}: ${subValue};`)
    return acc + subVars.join('\n') + '\n'
  }, '')
  return cssVariables
}

export const objToCssVars = <
  T extends {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  },
>(
  entryObj: T,
): string => {
  const variables: string[] = []
  for (const key in entryObj) {
    let kebabCaseKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    if (kebabCaseKey.endsWith('s')) {
      kebabCaseKey = kebabCaseKey.slice(0, -1)
    }
    for (const subKey of Object.keys(entryObj[key])) {
      variables.push(`--${subKey}-${kebabCaseKey}: ${entryObj[key][subKey]};`)
    }
  }
  return variables.join(' ')
}

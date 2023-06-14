export const camelToKebab = (key: string) => {
  return key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const kebabToCamel = (key: string) => {
  return key.replace(/-./g, (x) => x[1].toUpperCase())
}

export const OneLvlBbjToCssVars = <
  T extends {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  },
>(
  entryObj: T,
): string => {
  const variables: string[] = []
  for (const key in entryObj) {
    let kebabCaseKey = camelToKebab(key)
    if (kebabCaseKey.endsWith('s')) {
      kebabCaseKey = kebabCaseKey.slice(0, -1)
    }
    for (const subKey of Object.keys(entryObj[key])) {
      variables.push(`--${subKey}-${kebabCaseKey}: ${entryObj[key][subKey]};`)
    }
  }
  return variables.join(' ')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objToCssVars = (obj: { [key: string]: any }) => {
  return Object.entries(obj)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n')
}

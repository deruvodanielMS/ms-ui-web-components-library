import type { JSObject } from './types'

export const camelToKebab = (key: string) => {
  return key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const kebabToCamel = (key: string) => {
  return key.replace(/-./g, (x) => x[1].toUpperCase())
}

export const OneLvlBbjToCssVars = <T extends JSObject>(entryObj: T): string => {
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

export const flattenObject = (objInput: JSObject) => {
  const result = {}
  for (const key in objInput) {
    if (typeof objInput[key] === 'object') {
      for (const subKey in objInput[key]) {
        const newKey = `${key}-${subKey}`
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result[camelToKebab(newKey)] = objInput[key][subKey]
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result[key] = objInput[key]
    }
  }
  return result
}

export const unFlattenObjectByKeys = (
  possibleKeys: string[],
  flattenObject: Record<string, any>,
): Record<string, any> | undefined => {
  const result: Record<string, any> = {}
  for (const key of possibleKeys) {
    const nestedObject: Record<string, any> = {}
    for (const subkey in flattenObject) {
      if (subkey.startsWith(`${key}-`)) {
        const newSubkey = kebabToCamel(subkey.replace(`${key}-`, ''))

        nestedObject[newSubkey] = flattenObject[subkey]
      }
    }
    if (Object.keys(nestedObject).length > 0) {
      result[key] = nestedObject
    }
  }
  if (Object.keys(result).length > 0) {
    return result
  } else {
    return undefined
  }
}

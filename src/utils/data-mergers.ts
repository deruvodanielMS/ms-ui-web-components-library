import type { RecursivePartial } from './types'

interface CommonObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// @TODO: Improve typing or refactor function
export const truthyMerge = <T extends CommonObj>(obj1: T, obj2: RecursivePartial<T>): T => {
  // Create a copy of obj1
  const result = { ...obj1 }
  for (const key in obj2) {
    if (typeof obj2[key] === 'object' && obj2[key] != null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result[key] = truthyMerge(result[key], obj2[key])
    } else if (obj2[key]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result[key] = obj2[key]
    }
  }
  return result
}

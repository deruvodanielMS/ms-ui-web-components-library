export const truthyMerge = (
  obj1: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  },
  obj2: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  },
) => {
  for (const key in obj2) {
    if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
      if (!obj1[key]) obj1[key] = {}
      truthyMerge(obj1[key], obj2[key])
    } else {
      if (obj2[key]) {
        obj1[key] = obj2[key]
      }
    }
  }
  return obj1
}

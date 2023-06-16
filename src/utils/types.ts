export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export interface JSObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

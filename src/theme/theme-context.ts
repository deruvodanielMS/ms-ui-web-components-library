import { createContext } from '@lit-labs/context'

import { truthyMerge, unFlattenObjectByKeys } from '~/utils'

import type { MSTheme } from './theme-default'

export class MSThemeManager {
  private _themes: Map<string, MSTheme>
  private _currentTheme: string

  constructor(themes: { [key: string]: MSTheme }) {
    const initialThemes = Object.entries(themes)
    this._themes = new Map(initialThemes)
    this._currentTheme = initialThemes[0][0]
  }

  public get theme() {
    return this._currentTheme
  }

  public set theme(themeName: string) {
    if (!this._themes.has(themeName)) throw new Error(`Theme ${themeName} doest not exist.`)
    this._currentTheme = themeName
  }

  public get themeObject() {
    if (!this._themes.has(this._currentTheme))
      throw new Error(`Theme ${this._currentTheme} doest not exist.`)
    return this._themes.get(this._currentTheme)!
  }

  public set themeObject(theme: MSTheme) {
    if (!this._themes.has(this._currentTheme))
      throw new Error(`Theme ${this._currentTheme} doest not exist.`)
    this._themes.set(this._currentTheme, theme)
  }

  public getTheme(themeName: string) {
    if (!this._themes.has(themeName)) throw new Error(`Theme ${themeName} doest not exist.`)
    this._currentTheme = themeName
    return this._themes.get(themeName)
  }

  public updateTheme(values: Partial<MSTheme>) {
    this._themes.set(this._currentTheme, truthyMerge(this.themeObject, values) as MSTheme)
  }

  public updateColor(key: keyof MSTheme['colors'], val: string) {
    this._themes.set(this._currentTheme, truthyMerge(this.themeObject, { colors: { [key]: val } }))
  }

  public updateTypography(key: string, val: string) {
    const possibleKeys = Object.keys(this.themeObject.typographies)
    const singleTypographyKey = unFlattenObjectByKeys(possibleKeys, { [key]: val })
    if (!singleTypographyKey) return

    const typographiesObj = truthyMerge(this.themeObject.typographies, singleTypographyKey)

    this._themes.set(
      this._currentTheme,
      truthyMerge(this.themeObject, { typographies: typographiesObj }),
    )
  }
}

export const msThemeContext = createContext<MSThemeManager>(Symbol('ms-theme-provider'))

import { createContext } from '@lit-labs/context'

import { truthyMerge } from '~/utils'

import type { MSTheme } from './theme-default'

export class MSThemeManager {
  private _theme: MSTheme
  constructor(theme: MSTheme) {
    this._theme = theme
  }
  get theme() {
    return this._theme
  }

  public updateTheme(values: Partial<MSTheme>) {
    this._theme = truthyMerge(this._theme, values) as MSTheme
  }

  public updateColor(key: keyof MSTheme['colors'], val: string) {
    this._theme.colors[key] = val
  }

  public updateFont(key: keyof MSTheme['fonts'], val: string) {
    this._theme.fonts[key] = val
  }

  public updateFontWeight(key: keyof MSTheme['fontWeights'], val: number) {
    this._theme.fontWeights[key] = val
  }

  public updateLineHeight(key: keyof MSTheme['lineHeights'], val: number) {
    this._theme.lineHeights[key] = val
  }
}

export const msThemeContext = createContext<MSThemeManager>(Symbol('ms-theme-provider'))

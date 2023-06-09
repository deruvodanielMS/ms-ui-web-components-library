import { consume } from '@lit-labs/context'
import { html, type LitElement } from 'lit'
import { state } from 'lit/decorators.js'

import { defaultMSTheme, msThemeContext, type MSThemeManager } from '~/theme'
import { extractColorProperties, extractTypographiesProperties } from '~/theme/theme-helper'
import { flattenObject, objToCssVars, type JSObject } from '~/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T

export declare class WithThemeInterface {
  // @TODO: add all theme properties
  renderWithStyles(content: unknown): unknown
}

const flattenTypographiesProperties = extractTypographiesProperties(defaultMSTheme.typographies)

export const WithTheme = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithThemeElement extends superClass {
    static properties = {
      ...extractColorProperties(defaultMSTheme.colors),
      ...flattenTypographiesProperties,
    }

    @consume({ context: msThemeContext, subscribe: true })
    @state()
    tm?: MSThemeManager

    private _addStyles() {
      const elementAttributes = this.getAttributeNames()
      const flattenTypographies = flattenObject(defaultMSTheme.typographies)

      const validAttributes = elementAttributes.filter(
        (attr) => attr in defaultMSTheme.colors || attr in flattenTypographies,
      )

      const stylesObj: JSObject = {}
      for (const key of validAttributes) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        stylesObj[key] = this[key]
      }

      const cssVars = objToCssVars(stylesObj)

      return cssVars
        ? html`<style>
            :host{${cssVars}}
          </style>`
        : ''
    }

    renderWithStyles(content: unknown) {
      return html`${this._addStyles()}${content}`
    }
  }
  return WithThemeElement as Constructor<WithThemeInterface> & T
}

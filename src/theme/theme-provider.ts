import { provide } from '@lit-labs/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { colors as darkColors } from '~/styles/tokens/dark/colors'
import { flattenObject, objToCssVars, truthyMerge } from '~/utils'

import { MSThemeManager, msThemeContext } from './theme-context'
import type { MSTheme } from './theme-default'
import { defaultMSTheme } from './theme-default'
import { extractColorProperties, extractTypographiesProperties } from './theme-helper'

const flattenTypographiesProperties = extractTypographiesProperties(defaultMSTheme.typographies)

@customElement('ms-theme-provider')
export class MSThemeProvider extends LitElement {
  static properties = {
    ...extractColorProperties(defaultMSTheme.colors),
    ...flattenTypographiesProperties,
  }

  @provide({ context: msThemeContext })
  @property({ attribute: false })
  themeManager = new MSThemeManager({
    default: structuredClone(defaultMSTheme),
    dark: truthyMerge(structuredClone(defaultMSTheme), { colors: darkColors }),
  })

  @property({ type: String }) set theme(val: string) {
    this.themeManager.theme = val
    this.requestUpdate('theme', val)
  }

  attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, old, value)
    if (!value || old === value) return

    // @TODO: create a function to update every key in theme not only colors and typographies
    if (Object.keys(defaultMSTheme.colors).includes(name)) {
      this.themeManager.updateColor(name as keyof MSTheme['colors'], value)
      return
    }
    if (Object.keys(flattenTypographiesProperties).includes(name)) {
      this.themeManager.updateTypography(name, value)
      return
    }
  }

  private _overrideCssVariables() {
    const isClientSide = typeof window !== 'undefined'
    if (isClientSide) {
      const sheet = new CSSStyleSheet()
      const cssVariables = objToCssVars({
        ...this.themeManager.themeObject.colors,
        ...flattenObject(this.themeManager.themeObject.typographies),
      })
      sheet.replaceSync(`:host {${cssVariables}}`)
      this.shadowRoot!.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
    }
  }

  render() {
    this._overrideCssVariables()
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-theme-provider': MSThemeProvider & MSTheme
  }
}

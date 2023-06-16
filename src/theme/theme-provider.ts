import { provide } from '@lit-labs/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { darkColors } from '~/styles/usable-tokens/dark-color'
import { objToCssVars, truthyMerge } from '~/utils'

import { MSThemeManager, msThemeContext } from './theme-context'
import type { MSTheme } from './theme-default'
import { defaultMSTheme } from './theme-default'
import { extractColorProperties } from './theme-helper'

@customElement('ms-theme-provider')
export class MSThemeProvider extends LitElement {
  static properties = extractColorProperties(defaultMSTheme.colors)

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
    // @TODO: create a function to update every key in theme not only colors
    if (value && old !== value && Object.keys(defaultMSTheme.colors).includes(name)) {
      this.themeManager.updateColor(name as keyof MSTheme['colors'], value)
    }
  }

  private _overrideCssVariables() {
    const isClientSide = typeof window !== 'undefined'
    if (isClientSide) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`:host {${objToCssVars(this.themeManager.themeObject.colors)}}`)
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

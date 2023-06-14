import { provide } from '@lit-labs/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { objToCssVars } from '~/utils'

import { MSThemeManager, msThemeContext } from './theme-context'
import type { MSTheme } from './theme-default'
import { defaultMSTheme } from './theme-default'
import { extractColorProperties } from './theme-helper'

@customElement('ms-theme-provider')
export class MSThemeProvider extends LitElement {
  @provide({ context: msThemeContext })
  @property({ attribute: false })
  themeManager = new MSThemeManager(defaultMSTheme)

  static properties = extractColorProperties(defaultMSTheme.colors)

  attributeChangedCallback(
    name: keyof MSTheme['colors'],
    old: string | null,
    value: string | null,
  ): void {
    if (value && old !== value) this.themeManager.updateColor(name, value)
  }

  private _overrideCssVariables() {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`:host {${objToCssVars(this.themeManager.theme.colors)}}`)
    this.shadowRoot!.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
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

import { provide } from '@lit-labs/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { MSThemeManager, msThemeContext } from './theme-context'
import { defaultMSTheme } from './theme-default'

@customElement('ms-theme-provider')
export class MSThemeProvider extends LitElement {
  @provide({ context: msThemeContext })
  @property({ attribute: false })
  themeManager = new MSThemeManager(defaultMSTheme)

  // Color properties
  @property({ type: String }) set 'text-color'(val: string) {
    this.themeManager.updateColor('text', val)
    this.requestUpdate('text-color', val)
  }

  @property({ type: String }) set 'background-color'(val: string) {
    this.themeManager.updateColor('background', val)
    this.requestUpdate('background-color', val)
  }

  @property({ type: String }) set 'primary-color'(val: string) {
    this.themeManager.updateColor('primary', val)
    this.requestUpdate('primary-color', val)
  }

  @property({ type: String }) set 'secondary-color'(val: string) {
    this.themeManager.updateColor('secondary', val)
    this.requestUpdate('secondary-color', val)
  }

  @property({ type: String }) set 'accent-color'(val: string) {
    this.themeManager.updateColor('accent', val)
    this.requestUpdate('accent-color', val)
  }

  @property({ type: String }) set 'muted-color'(val: string) {
    this.themeManager.updateColor('muted', val)
    this.requestUpdate('muted-color', val)
  }

  // Font properties
  @property({ type: String }) set 'body-font'(val: string) {
    this.themeManager.updateFont('body', val)
    this.requestUpdate('body-font', val)
  }

  // Font weight properties
  @property({ type: Number }) set 'body-font-weight'(val: number) {
    this.themeManager.updateFontWeight('body', val)
    this.requestUpdate('body-font-weight', val)
  }

  @property({ type: Number }) set 'bold-font-weight'(val: number) {
    this.themeManager.updateFontWeight('bold', val)
    this.requestUpdate('bold-font-weight', val)
  }

  // line height properties
  @property({ type: Number }) set 'body-line-height'(val: number) {
    this.themeManager.updateLineHeight('body', val)
    this.requestUpdate('body-line-height', val)
  }

  // private _addStyles() {
  //   // @TODO: check if there is a way to use Constructable StyleSheets instead
  //   return html`<style>
  //     :host{${this.themeManager.theme.cssVars}}
  //   </style>`
  // }

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-theme-provider': MSThemeProvider
  }
}

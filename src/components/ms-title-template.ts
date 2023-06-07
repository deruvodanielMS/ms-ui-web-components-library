import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { defaultMSTheme } from '~/theme'

@customElement('ms-title-template')
export class MSTitleTemplate extends WithTheme(LitElement) {
  static styles = css`
    :host {
      display: inline-block;
      border: solid 1px var(--text-color, ${unsafeCSS(defaultMSTheme.colors.text)});
      border-radius: 8px;
      padding: 8px 12px;
    }
    h1 {
      color: var(--text-color, ${unsafeCSS(defaultMSTheme.colors.text)});
      width: fit-content;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 20px;
      margin: 0;
      font-family: sans-serif;
    }
  `

  render() {
    return this.renderWithStyles(html`<h1><slot></slot></h1>`)
  }
}

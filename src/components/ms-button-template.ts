import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { defaultMSTheme } from '~/theme'

@customElement('ms-button-template')
export class MSButtonTemplate extends WithTheme(LitElement) {
  static styles = css`
    :host {
      display: inline-block;
      background-color: var(--primary-color, ${unsafeCSS(defaultMSTheme.colors.primary)});
      color: White;
      font-size: 14px;
      font-family: sans-serif;
      border-radius: 8px;
      padding: 8px 16px;
      cursor: pointer;
    }
  `

  render() {
    return this.renderWithStyles(html`<slot></slot>`)
  }
}

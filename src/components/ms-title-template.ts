import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { defaultMSTheme } from '~/theme'

@customElement('ms-title-template')
export class MSTitleTemplate extends WithTheme(LitElement) {
  static styles = css`
    :host {
      display: inline-block;
      border: solid 2px
        var(
          --admin-user-primary-main,
          ${unsafeCSS(defaultMSTheme.colors['admin-user-primary-main'])}
        );
      border-radius: 8px;
      padding: 8px 12px;
    }
    h1 {
      color: var(
        --admin-user-primary-main,
        ${unsafeCSS(defaultMSTheme.colors['admin-user-primary-main'])}
      );
      width: fit-content;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 22px;
      margin: 0;
      font-family: sans-serif;
    }
  `

  render() {
    return this.renderWithStyles(html`<h1><slot></slot></h1>`)
  }
}

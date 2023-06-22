import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msInputToggleStyles } from './ms-input-toggle.styles'

/**
 * @element ms-input-toggle
 * @description Custom element for an input toggle component.
 */
@customElement('ms-input-toggle')
export class MSInputToggle extends WithTheme(LitElement) {
  static styles = msInputToggleStyles

  /**
   * @property {string} title - The title of the toggle.
   * @default ''
   */
  @property({ type: String })
  title = ''

  /**
   * @property {string} description - The description of the toggle.
   * @default ''
   */
  @property({ type: String })
  description = ''

  render() {
    return this.renderWithStyles(html`
      <ms-toggle></ms-toggle>
      <div role="group" aria-labelledby="label-${this.id}">
        <ms-typography id="label-${this.id}" variant="p" weight="400"> ${this.title}</ms-typography>
        <ms-typography variant="span" color="#5E5C64" weight="400"
          >${this.description}</ms-typography
        >
      </div>
    `)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-input-toggle': MSInputToggle
  }
}

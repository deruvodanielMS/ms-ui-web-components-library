import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msInputCheckboxStyles } from './ms-input-checkbox.styles'

/**
 * @element ms-input-checkbox
 * @description Custom element for an input checkbox component.
 */
@customElement('ms-input-checkbox')
export class MSInputCheckbox extends WithTheme(LitElement) {
  static styles = msInputCheckboxStyles

  //@TODO: change label & span with Typography component

  /**
   * @property {string} title - The title of the checkbox.
   * @default ''
   */
  @property({ type: String })
  title = ''

  /**
   * @property {string} description - The description of the checkbox.
   * @default ''
   */
  @property({ type: String })
  description = ''

  render() {
    return this.renderWithStyles(html`
      <ms-checkbox></ms-checkbox>
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
    'ms-input-checkbox': MSInputCheckbox
  }
}

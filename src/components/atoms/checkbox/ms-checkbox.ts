import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msCheckboxStyles } from './ms-checkbox.styles'

/**
 * @element ms-checkbox
 * @description Custom element for a checkbox component.
 */
@customElement('ms-checkbox')
export class MSCheckbox extends WithTheme(LitElement) {
  static styles = msCheckboxStyles

  /**
   * @property {boolean} checked - Whether the checkbox is checked.
   * @default false
   */
  @property({ type: Boolean })
  checked = false

  /**
   * @property {boolean} disabled - Whether the checkbox is disabled.
   * @default false
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    return this.renderWithStyles(html`
      <input
        ?disabled=${this.disabled}
        type="checkbox"
        .checked=${this.checked}
        @change=${this.handleChange}
        aria-disabled="${this.disabled ? 'true' : 'false'}"
        aria-checked="${this.checked ? 'true' : 'false'}"
        aria-label="checkbox"
      />
    `)
  }

  /**
   * Handles the change event of the checkbox.
   *
   * @param {Event} event - The change event.
   */
  handleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement
    this.checked = checkbox.checked
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-checkbox': MSCheckbox
  }
}

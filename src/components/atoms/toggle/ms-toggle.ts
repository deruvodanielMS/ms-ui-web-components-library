import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { msToggleStyles } from './ms-toggle.styles'

/**
 * @element ms-toggle
 * @description Custom element for a toggle component.
 */
@customElement('ms-toggle')
export class MSToggle extends LitElement {
  static styles = msToggleStyles

  /**
   * @property {boolean} checked - Whether the toggle is checked.
   * @default false
   */
  @property({ type: Boolean })
  checked = false

  /**
   * @property {boolean} disabled - Whether the toggle is disabled.
   * @default false
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <label id="label-${this.id}">
        <input
          type="checkbox"
          .checked=${this.checked}
          @change=${this.handleChange}
          ?disabled=${this.disabled}
          aria-disabled="${this.disabled ? 'true' : 'false'}"
          aria-checked="${this.checked ? 'true' : 'false'}"
          aria-label="toggle"
        />
        <span></span>
      </label>
    `
  }

  /**
   * Handles the change event of the toggle.
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
    'ms-toggle': MSToggle
  }
}

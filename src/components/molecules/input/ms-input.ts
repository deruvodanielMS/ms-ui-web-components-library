import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msInputStyles } from './ms-input.styles'

/**
 * Custom input component.
 * @fires MSInput#val-change - Dispatched when the input value changes.
 */
@customElement('ms-input')
export class MSInput extends WithTheme(LitElement) {
  /**
   * The styles for the input component.
   * @type {CSSResult}
   */
  static styles = msInputStyles

  /**
   * The value of the input field.
   * @type {string}
   * @default ''
   */
  @property({ type: String })
  value = ''

  /**
   * The label text for the input field.
   * @type {string}
   * @default ''
   */
  @property({ type: String })
  label = ''

  /**
   * The informative message to display below the input field.
   * @type {string}
   * @default 'Informative message'
   */
  @property({ type: String })
  message = 'Informative message'

  /**
   * The success message to display below the input field when the status is 'success'.
   * @type {string}
   * @default 'Success message'
   */
  @property({ type: String })
  successLabel = 'Success message'

  /**
   * The error message to display below the input field when the status is 'error'.
   * @type {string}
   * @default 'Error message'
   */
  @property({ type: String })
  errorLabel = 'Error message'

  /**
   * The placeholder text for the input field.
   * @type {string}
   * @default ''
   */
  @property({ type: String })
  placeholder = ''

  /**
   * The state of the icon (e.g., 'active', 'inactive').
   * @type {string}
   * @default ''
   */
  @property({ type: String })
  iconState = ''

  /**
   * A boolean value indicating whether the input field is disabled or not.
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  disabled = false

  /**
   * The status of the input field ('error', 'success').
   * @type {string}
   * @default ''
   */
  @property({ type: String })
  status = ''

  /**
   * Renders the input component.
   * @returns {TemplateResult} The rendered template.
   */
  render() {
    const icon = `/src/assets/icons/${this.status}.svg`

    return this.renderWithStyles(
      html`
        <ms-typography variant="p" class="body1">${this.label}</ms-typography>
        <input
          id="input-${this.id}"
          aria-labelledby="input"
          class=${this.status}
          ?disabled=${this.disabled}
          type="text"
          placeholder="${this.placeholder}"
          .value=${this.value}
          @input=${this.inputHandler}
        />
        <div class="message-group" role="group" aria-labelledby="label-${this.id}">
          ${this.status !== '' ? html`<img aria-hidden="true" src=${icon} class="icon" />` : null}
          <ms-typography
            variant="span"
            class="${this.status === '' ? 'message' : this.status}-caption"
            >${this.status === 'success'
              ? this.successLabel
              : this.status === 'error'
              ? this.errorLabel
              : this.message}</ms-typography
          >
        </div>
      `,
    )
  }

  /**
   * Event listener for the input event.
   * Dispatches the 'val-change' event with the input value.
   * @param {Event} event - The input event.
   * @emits MSInput#val-change
   */
  inputHandler(event: Event) {
    this.dispatchEvent(
      new CustomEvent('val-change', { detail: { value: event.composedPath()[0] } }),
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-input': MSInput
  }
}

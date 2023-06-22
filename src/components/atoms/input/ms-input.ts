import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msInputStyles } from './ms-input.styles'

@customElement('ms-input')
export class MSInput extends WithTheme(LitElement) {
  static styles = msInputStyles

  @property({ type: String })
  value = ''

  @property({ type: String })
  label = ''

  @property({ type: String })
  message = 'Informative message'

  @property({ type: String })
  successLabel = 'Success message'

  @property({ type: String })
  errorLabel = 'Error message'

  @property({ type: String })
  placeholder = ''

  @property({ type: String })
  icon = ''

  @property({ type: String })
  iconState = ''

  @property({ type: Boolean })
  disabled = false

  @property({ type: String })
  status = ''

  render() {
    return this.renderWithStyles(
      html`
        <ms-typography variant="p">${this.label}</ms-typography>
        <div>
          ${this.icon
            ? html`
                <div class="icon-container">
                  <i class="${this.icon}"></i>
                </div>
              `
            : ''}
          <input
            class=${this.status === 'success' ? 'success' : this.status === 'error' ? 'error' : ''}
            ?disabled=${this.disabled}
            type="text"
            placeholder="${this.placeholder}"
            .value=${this.value}
            @input=${this.inputHandler}
          />
        </div>
        <div>
          ${this.iconState
            ? html`
                <div class="icon-container">
                  <i class="${this.icon}"></i>
                </div>
              `
            : ''}
          <ms-typography variant="span"
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

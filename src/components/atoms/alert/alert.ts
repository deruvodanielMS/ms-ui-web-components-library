import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { setAlign } from '~/utils'

import { msAlertStyles } from './alert.styles'

export const typesAllowed = ['success', 'info', 'error', 'warning']
export const positionsAllowed = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
]
@customElement('ms-alert')
export class MSAlert extends WithTheme(LitElement) {
  static styles = msAlertStyles

  @property({ type: String })
  position = ''

  /** The `renderAsToast` property refers to the ability of the component to adapt to other design styles, that may contain a little description and may place in any place of the window, modifying the `position` property */
  @property({ type: Boolean })
  renderAsToast = false

  @property({ type: Boolean })
  hasCloseButton = false

  @property({ type: String })
  variant = ''

  @property({ type: String })
  description? = ''

  @property({ type: Boolean })
  open = false

  render() {
    return html`
      <div class=${this.renderAsToast ? this.position : ''} ?hidden=${!this.open}>
        ${this.renderAsToast ? this.renderAsToastElement() : this.renderAsSnackbarElement()}
      </div>
    `
  }

  stylePosition() {
    switch (this.position) {
      case 'top-left':
        return setAlign('flex-start', 'flex-start')
      case 'top-right':
        return setAlign('flex-start', 'flex-end')
      case 'top-center':
        return setAlign('flex-start', 'center')
      case 'bottom-left':
        return setAlign('flex-end', 'flex-start')
      case 'bottom-center':
        return setAlign('flex-end', 'center')
      case 'bottom-right':
        return setAlign('flex-end', 'flex-end')
    }
  }

  renderAsToastElement() {
    const icon = `/src/assets/icons/${this.variant}.svg`

    return html`
      <style>
        :host{
          ${this.stylePosition()}
        }
      </style>
      <div aria-label=${`${this.variant}-alert-message`} class=${`${this.variant} toast-wrapper`}>
        <img aria-hidden="true" src=${icon} class="icon" />
        <ms-typography variant="p" class="body1"> ${this.title} </ms-typography>
        ${this.description
          ? html`<ms-typography variant="p" class="body2"> ${this.description} </ms-typography>`
          : null}
      </div>
    `
  }

  renderAsSnackbarElement() {
    return html`
      <div
        aria-label=${`${this.variant}-alert-message`}
        class=${`${this.variant} snackbar-wrapper`}
      >
        ${this.title}
        ${this.hasCloseButton
          ? html`
              <button role="button" aria-label="Cancel" @click=${() => (this.open = false)}>
                &times;
              </button>
            `
          : null}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-alert': MSAlert
  }
}

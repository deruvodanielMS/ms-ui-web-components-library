import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { getThemeColor } from '~/utils'

import { msIconButton } from './icon-button.styles'
export const variantAllowed = ['contained', 'outlined']
export const sizesAllowed = ['small', 'medium', 'large']

@customElement('ms-icon-button')
export class MSIconButton extends WithTheme(LitElement) {
  static styles = msIconButton

  @property({ type: String })
  variant = 'contained'

  @property({ type: String })
  color =
    this.variant === 'contained'
      ? getThemeColor('gray-white').toString()
      : getThemeColor('regular-user-primary-main').toString()

  @property({ type: Boolean })
  disabled = false

  @property({ type: String })
  ariaLabel = ''

  @property({ type: String })
  size = 'small'

  render() {
    this.style.fill = this.color

    return this.renderWithStyles(html`
      <button
        ?disabled=${this.disabled}
        @click=${this.click}
        aria-label=${this.ariaLabel}
        class=${`${this.variant === 'outlined' ? 'outlined' : ''} ${
          this.size !== 'small' ? this.size : ''
        }`}
      >
        <slot></slot>
      </button>
    `)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-icon-button': MSIconButton
  }
}

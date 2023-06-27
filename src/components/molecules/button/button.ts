import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import type { MsIcons } from '~/assets/icons'
import { Icons } from '~/assets/icons'
import { WithTheme } from '~/mixins'
import { getThemeColor } from '~/utils'

import { msButtonstyles } from './button.styles'

@customElement('ms-button')
export class MSButton extends WithTheme(LitElement) {
  static styles = msButtonstyles

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

  /**
   * To display a custom icon, set this to `true` and the `icon` property to `false`.
   * Also use the 'slot' of this component to place you custom `<svg>`
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  customIcon = false

  /**
   * The icon property will display any preloaded icon in this library.
   * For no icon at all, set this to 'none' and the property `customIcon` to false
   * @type {string}
   * @default 'none'
   */
  @property({ type: String })
  icon = 'none' as keyof MsIcons

  render() {
    this.style.fill = this.color

    return this.renderWithStyles(
      html`
        <button
          ?disabled=${this.disabled}
          @click=${this.click}
          aria-label=${this.ariaLabel}
          class=${`${this.variant === 'outlined' ? 'outlined' : ''} ${
            this.size !== 'small' ? this.size : ''
          }`}
        >
          ${this.icon && !this.customIcon ? Icons[this.icon] : null}
          ${this.customIcon ? this.renderIcon() : null}
          <slot></slot>
        </button>
      `,
    )
  }

  renderIcon() {
    return html`<slot name="icon"></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-button': MSButton
  }
}

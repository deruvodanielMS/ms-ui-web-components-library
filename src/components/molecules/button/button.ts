import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import type { MsIcons } from '~/assets/icons'
import { Icons, iconNameAllowed } from '~/assets/icons'
import { WithTheme } from '~/mixins'
import { getThemeColor } from '~/utils'

import { msButtonstyles } from './button.styles'
import { iconPositionsAllowed, sizesAllowed, variantAllowed } from './button.types'

/**
 * @prop {string} size - type of sizy for the button between 'small', 'medium' or 'large'
 * @prop {string} ariaLabel - the accesible attribute for the inner button
 * @prop {string} iconPosition - where to display the icon 'left' or 'right' to the label
 * @prop {boolean} customIcon - the ability of render a customicon that is sended as a child of the component and render in a slot. By default is set in `false`.
 * @prop {string} icon - The name of the preload icon to render for the button
 * @prop {boolean} disabled
 * @prop {string} variant - type of styling for the button between 'outlined', 'text' or 'contained'
 *
 * @summary this is a generic button that works both as a labeled button as an icon button
 *
 * @tag ms-button
 */

@customElement('ms-button')
export class MSButton extends WithTheme(LitElement) {
  static styles = msButtonstyles

  @property({ type: String })
  variant = variantAllowed[0]

  @property({ type: String })
  color =
    this.variant === 'contained'
      ? getThemeColor('gray-white').toString()
      : getThemeColor('regular-user-primary-main').toString()

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  ['aria-label'] = ''

  @property({ type: String })
  size = sizesAllowed[0]

  @property({ type: String })
  iconPosition = iconPositionsAllowed[0]

  @property({ type: Boolean })
  customIcon = false

  @property({ type: String })
  icon?: keyof MsIcons

  render() {
    this.style.fill = this.color
    this.setAttribute('aria-label', this['aria-label'])

    return this.renderWithStyles(
      html`
        <button
          ?disabled=${this.disabled}
          @click=${this.click}
          aria-label=${this.ariaLabel}
          class=${`${this.variant !== 'contained' ? this.variant : ''} ${
            this.size !== 'small' ? this.size : ''
          } ${this.iconPosition === 'right' ? 'right' : ''}`}
        >
          ${this.customIcon ? this.renderCustomIcon() : this.setTypeOfIcon()}
          <slot></slot>
        </button>
      `,
    )
  }

  setTypeOfIcon() {
    if (this.icon) {
      if (!iconNameAllowed.includes(this.icon)) return
      return html`${Icons[this.icon]}`
    }
    return
  }

  renderCustomIcon() {
    return html`<slot name="custom-icon"></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-button': MSButton
  }
}

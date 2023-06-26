import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { getThemeColor } from '~/utils'

import { msIconButton } from './icon-button.styles'

@customElement('ms-icon-button')
export class MSIconButton extends WithTheme(LitElement) {
  static styles = msIconButton

  @property({ type: String })
  color = getThemeColor('gray-white').toString()

  @property({ type: Boolean })
  disabled = false

  render() {
    this.style.fill = this.color

    return this.renderWithStyles(html`
      <button>
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

import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msCheckboxStyles } from './ms-typography.styles'

@customElement('ms-typography')
export class MSTypography extends WithTheme(LitElement) {
  static styles = msCheckboxStyles

  @property({ type: String })
  id = ''

  //@TODO: set to specific strings
  // 'center' | 'inherit' | 'justify' | 'left' | 'right'

  @property({ type: String })
  align = 'inherit'

  @property({ type: String })
  color = ''

  @property({ type: String })
  weight = ''

  @property({ type: String })
  variant = ''

  render() {
    this.style.textAlign = this.align
    this.style.fontWeight = this.weight
    this.style.color = this.color

    return this.createTypography()
  }

  createTypography() {
    if (!this.variant && this.variant === '') return

    const elementAlreadyCreatted = this.shadowRoot?.getElementById(this.id)
    elementAlreadyCreatted && elementAlreadyCreatted.remove()

    const newElem = Object.assign(document.createElement(`${this.variant}`), {
      id: `${this.id}`,
      innerHTML: '<slot></slot>',
    })

    this.shadowRoot?.appendChild(newElem)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-typography': MSTypography
  }
}

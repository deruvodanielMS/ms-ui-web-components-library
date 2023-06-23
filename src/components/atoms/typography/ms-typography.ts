import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msTypographyStyles } from './ms-typography.styles'

export const typesAllowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'article']

@customElement('ms-typography')
export class MSTypography extends WithTheme(LitElement) {
  static styles = msTypographyStyles

  @property({ type: String })
  align = 'inherit'

  @property({ type: String })
  color = ''

  @property({ type: String })
  weight = ''

  @property({ type: String })
  variant = ''

  render() {
    this.createTypography()
  }

  createTypography() {
    if (!this.variant && !typesAllowed.includes(this.variant)) return
    if (!this.shadowRoot) return

    this.style.textAlign = this.align
    this.style.fontWeight = this.weight
    this.style.color = this.color
    const elementAlreadyCreatted = this.shadowRoot?.querySelector('[data-typography="created"]')
    elementAlreadyCreatted && elementAlreadyCreatted.remove()

    const newElem = Object.assign(document.createElement(this.variant), {
      innerHTML: '<slot></slot>',
    })

    newElem.setAttribute('data-typography', 'created')
    this.shadowRoot?.appendChild(newElem)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-typography': MSTypography
  }
}

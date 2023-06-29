import { LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'
import { typographies, type MsTypographies } from '~/styles/tokens/default/typographies'

import { msTypographyStyles } from './ms-typography.styles'

const allowedHTMLElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'article'] as const

export const typographyVariants = Object.keys(typographies)

const variantDictionary: Record<keyof MsTypographies, (typeof allowedHTMLElements)[number]> = {
  'heading-medium-h1': 'h1',
  'heading-medium-h2': 'h2',
  'heading-medium-h3': 'h3',
  'heading-medium-h4': 'h4',
  'heading-medium-h5': 'h5',
  'heading-medium-h6': 'h6',
  'heading-regular-h1': 'h1',
  'heading-regular-h2': 'h2',
  'heading-regular-h3': 'h3',
  'heading-regular-h4': 'h4',
  'heading-regular-h5': 'h5',
  'heading-regular-h6': 'h6',
  'paragraph-body-1': 'p',
  'paragraph-body-1-i': 'p',
  'paragraph-body-1-m': 'p',
  'paragraph-body-2': 'p',
  'paragraph-body-2-i': 'p',
  'paragraph-body-2-m': 'p',
  'paragraph-caption': 'span',
  'paragraph-caption-i': 'span',
  'paragraph-caption-m': 'span',
  'paragraph-overline': 'span',
  'paragraph-overline-m': 'span',
}

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
  variant: keyof MsTypographies = 'paragraph-body-1'

  render() {
    this.createTypography()
    return this.renderWithStyles(nothing)
  }

  createTypography() {
    if (!this.variant && !typographyVariants.includes(this.variant)) return
    if (!this.shadowRoot) return

    this.style.textAlign = this.align
    this.style.fontWeight = this.weight
    this.style.color = this.color

    const elementAlreadyCreated = this.shadowRoot?.querySelector('[data-typography="created"]')
    elementAlreadyCreated && elementAlreadyCreated.remove()

    const newElem = Object.assign(document.createElement(variantDictionary[this.variant]), {
      className: this.variant,
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

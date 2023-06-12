import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msInputCheckboxStyles } from './ms-input-checkbox.styles'

@customElement('ms-input-checkbox')
export class MSInputCheckbox extends WithTheme(LitElement) {
  static styles = [msInputCheckboxStyles]

  //@TODO: change label & span with Typography component

  @property({ type: String })
  title = ''

  @property({ type: String })
  description = ''

  render() {
    return this.renderWithStyles(html`
      <ms-checkbox></ms-checkbox>
      <div>
        <label> ${this.title}</label>
        <span>${this.description}</span>
      </div>
    `)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-input-checkbox': MSInputCheckbox
  }
}

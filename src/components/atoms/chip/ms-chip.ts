import { LitElement, html, nothing, svg } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { WithTheme } from '~/mixins'

import { msChipStyles } from './ms-chip.styles'

const crossRect = svg`
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.73483 2.73483C2.88128 2.58839 3.11872 2.58839 3.26517 2.73483L6 5.46967L8.73484 2.73483C8.88128 2.58839 9.11872 2.58839 9.26516 2.73483C9.41161 2.88128 9.41161 3.11872 9.26516 3.26517L6.53033 6L9.26516 8.73484C9.41161 8.88128 9.41161 9.11872 9.26516 9.26516C9.11872 9.41161 8.88128 9.41161 8.73484 9.26516L6 6.53033L3.26517 9.26516C3.11872 9.41161 2.88128 9.41161 2.73483 9.26516C2.58839 9.11872 2.58839 8.88128 2.73483 8.73484L5.46967 6L2.73483 3.26517C2.58839 3.11872 2.58839 2.88128 2.73483 2.73483Z"/>
`
/**
 * @attr {color} admin-user-primary-dark - overrides main color
 * @attr {color} admin-user-primary-background - overrides background color
 *
 * @prop {boolean} closable - Option to enable close icon and its event
 *
 * @event {CustomEvent} close - Custom event send when the tag icon is clicked
 *
 * @summary This is a simple MS Chip component
 *
 * @tag ms-chip
 */
@customElement('ms-chip')
export class MsChip extends WithTheme(LitElement) {
  static styles = msChipStyles

  @property({ type: Boolean })
  closable = true

  render() {
    return this.renderWithStyles(
      html`<ms-typography variant="paragraph-body-2" color="var(--admin-user-primary-dark)"
          ><slot></slot></ms-typography
        >${this.closable
          ? html`<svg
              @click="${this._dispatchClose}"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              ${crossRect}
            </svg>`
          : nothing}`,
    )
  }

  private _dispatchClose() {
    this.dispatchEvent(new CustomEvent('close'))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ms-chip': MsChip
  }
}

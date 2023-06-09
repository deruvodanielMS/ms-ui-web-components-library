import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('ms-icon')
export class MSIcon extends LitElement {
  @property({ type: String })
  iconClass?: string

  connectedCallback() {
    const styles = document.querySelector('link[href*="fontawesome"]')
    this.attachShadow({ mode: 'open' }).innerHTML = `
    <i class="${this.iconClass}"></i>
    `
    if (styles) {
      this.shadowRoot.appendChild(styles.cloneNode())
    }
  }
}

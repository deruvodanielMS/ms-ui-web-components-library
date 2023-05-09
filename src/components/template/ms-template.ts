export class MSTemplate extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')

    template.innerHTML = `
        <span>Hello World 2</span>
      `

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.get('ms-template') || customElements.define('ms-template', MSTemplate)

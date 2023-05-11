const sheet = new CSSStyleSheet()
sheet.replaceSync(`
button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid var(--colors-primary);
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: var(--colors-primary);
  cursor: pointer;
  display: inline-block;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
 }
 
 button:disabled {
  pointer-events: none;
 }
 
 button:hover {
  color: #fff;
  background-color: var(--colors-primary);
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
 }
 
 button:active {
  box-shadow: none;
  transform: translateY(0);
 }
`)

const template = document.createElement('template')
template.innerHTML = `
<button></button>
`

export type MSAtomTemplateProps = {
  title: string
  disabled: boolean
} & HTMLElement

export class MSAtomTemplate extends HTMLElement {
  private button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    const baseTheme = `:host{}`
    sheet.insertRule(baseTheme, 0)
    shadowRoot.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]

    this.button = shadowRoot.querySelector('button')!
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', val.toString())
    } else {
      this.removeAttribute('disabled')
    }
  }

  static get observedAttributes(): (keyof MSAtomTemplateProps)[] {
    return ['title', 'disabled']
  }

  attributeChangedCallback(name: keyof MSAtomTemplateProps, oldValue: string, newValue: string) {
    if (name === 'title' && oldValue !== newValue) this.updateButtonText(newValue)
    if (name === 'disabled' && oldValue !== newValue) this.updateButtonDisabled(newValue)
  }

  updateButtonText(val: string) {
    this.button.innerText = val
  }

  updateButtonDisabled(val: string) {
    this.disabled = !!val
  }
}

customElements.get('ms-atom-template') || customElements.define('ms-atom-template', MSAtomTemplate)

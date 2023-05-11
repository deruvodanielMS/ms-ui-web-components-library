const styles = new CSSStyleSheet()
styles.replaceSync(`
input {
    border: 1px solid #ADABB3;
    border-radius: 6px;
    padding: 8px 8px;
    font-size: 16px;
    max-width: 160px;
    box-sizing: border-box;
}
input:focus {
    outline: none;
    border-color: #0ECC7E;
}
button {
    border: none;
    display: inline-block;
    background: #0ECC7E;
    border-radius: 6px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    padding: 9px 20px;
    cursor: pointer;
}
button:active {
    opacity: 0.3;
}
`)

const template = document.createElement('template')
template.innerHTML = `
<input type="text"></input>
<button>next</button>
`

export type MSInputActionProps = {
  'on-next': (pass: string) => void
}

export class MSInputAction extends HTMLElement {
  private root: ShadowRoot
  private textInput: HTMLInputElement
  private actionBtn: HTMLButtonElement

  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })

    this.root.appendChild(template.content.cloneNode(true))
    this.textInput = this.root.querySelector('input')!
    this.actionBtn = this.root.querySelector('button')!

    const baseTheme = `:host{}`
    styles.insertRule(baseTheme, 0)
    this.root.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]
  }

  connectedCallback() {
    this.actionBtn.addEventListener('click', () => {
      const onNextEvent = new CustomEvent('on-next', {
        detail: { password: this.textInput.value },
        bubbles: true,
        composed: true,
      })
      this.root.dispatchEvent(onNextEvent)
    })
  }
}

customElements.get('ms-input-action') || customElements.define('ms-input-action', MSInputAction)

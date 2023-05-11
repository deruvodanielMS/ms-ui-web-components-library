const styles = new CSSStyleSheet()
styles.replaceSync(`
section {
    width: fit-content;
    height: fit-content;
    font-family: 'Inter', Sans-Serif;
    border-radius: 8px;
    overflow: hidden;
    background-color: #FFFFFF;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.15);
}
header {
    display: flex;
    justify-content: center;
    background-color: #37363B;
    padding: 16px 18px;
}
h2 {
    color: #FFFFFF;
    font-size: 18px;
    margin: 0;
}
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
p {
    margin: 10px 0;
}
footer {
    padding: 16px;
    padding-top: 0;
}
`)

const template = document.createElement('template')
template.innerHTML = `
<section>
    <header>
        <h2>User credentials</h2>
    </header>
    <main>
        <ms-avatar></ms-avatar>
        <p id="ms-user-access-user-name"></p>
    </main>
    <footer>
        <ms-input-action></ms-input-action>
    </footer>
</section>
`

export type MSUserAccessProps = {
  'user-src': string
  'user-name': string
  'on-next': (pass: string) => void
}

export class MSUserAccess extends HTMLElement {
  private root: ShadowRoot
  private userNameContainer: HTMLParagraphElement
  private msAvatar: HTMLElement
  private msInputAction: HTMLElement

  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })

    this.root.appendChild(template.content.cloneNode(true))

    this.userNameContainer = this.root.querySelector('#ms-user-access-user-name')!
    this.msAvatar = this.root.querySelector('ms-avatar')!
    this.msInputAction = this.root.querySelector('ms-input-action')!

    const baseTheme = `:host{}`
    styles.insertRule(baseTheme, 0)
    this.root.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]
  }

  static get observedAttributes(): (keyof MSUserAccessProps)[] {
    return ['user-src', 'user-name']
  }

  attributeChangedCallback(name: keyof MSUserAccessProps, oldValue: string, newValue: string) {
    if (name === 'user-src' && oldValue !== newValue) this.updateUserSrc(newValue)
    if (name === 'user-name' && oldValue !== newValue) this.updateUserName(newValue)
  }

  connectedCallback() {
    this.msInputAction.addEventListener('on-next', (e: any) => {
      const continueEvent = new CustomEvent('on-continue', {
        detail: e.detail,
        bubbles: true,
        composed: true,
      })
      this.root.dispatchEvent(continueEvent)
    })
  }

  private updateUserSrc(val: string) {
    this.msAvatar.setAttribute('user-src', val)
  }

  private updateUserName(val: string) {
    this.msAvatar.setAttribute('user-name', val)
    this.userNameContainer.innerText = val
  }
}

customElements.get('ms-user-access') || customElements.define('ms-user-access', MSUserAccess)

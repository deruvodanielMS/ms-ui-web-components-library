import defaultTheme from '~/theme/theme'
import { extractCssVariables } from '~/utils'

const styles = new CSSStyleSheet()
styles.replaceSync(`
img {
  width: 100%;
  height: 100%;
  background-color: var(--primary-main);
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  object-fit: cover;
}
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  background-color: #ADABB3;
  font-family: 'Inter', Sans-Serif;
  color: #FFFFFF;
}
svg {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  fill: #FFFFFF;
  overflow: hidden;
}
`)

const userSvg = `
<svg
viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z"  />
</svg>
`

export type MSAvatarProps = {
  'user-src': string
  'user-name': string
}

export class MSAvatar extends HTMLElement {
  private root: ShadowRoot
  private img: HTMLImageElement

  constructor(theme = defaultTheme) {
    super()
    this.root = this.attachShadow({ mode: 'open' })

    this.img = document.createElement('img')
    this.root.appendChild(this.img)
    const baseRootRules = `:host{display: inline-block;width: 48px; height: 48px; overflow: hidden;  border-radius: 50%;${extractCssVariables(
      theme.colors,
    )}`
    console.log(baseRootRules)
    styles.insertRule(baseRootRules, 0)
    this.root.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]
  }

  static get observedAttributes(): (keyof MSAvatarProps)[] {
    return ['user-src', 'user-name']
  }

  attributeChangedCallback(name: keyof MSAvatarProps, oldValue: string, newValue: string) {
    if (name === 'user-src' && oldValue !== newValue) this.updateUserSrc(newValue)
    if (name === 'user-name' && oldValue !== newValue) this.updateUserName(newValue)
  }

  connectedCallback() {
    const hasValidSrc = Boolean(this.img.src)
    const hasValidName = Boolean(this.img.alt)

    if (!hasValidSrc && hasValidName) {
      const content = document.createElement('div')
      content.textContent = this.img.alt
        .split(' ')
        .map((n) => n[0].toUpperCase())
        .join('')
      this.replaceContent(content)
      return
    }
    if (!hasValidSrc && !hasValidName) {
      const container = document.createElement('div')
      container.style.backgroundColor = 'var(--primary-main)'
      container.style.border = 'none'
      container.innerHTML = userSvg
      this.replaceContent(container)
      return
    }
  }

  private updateUserSrc(val: string) {
    // this.img.src = val find a better way to re render
    const newImg = document.createElement('img')
    newImg.src = val
    this.replaceContent(newImg)
  }

  private updateUserName(val: string) {
    this.img.alt = val
  }

  private replaceContent(el: HTMLElement) {
    this.root.innerHTML = ''
    this.root.appendChild(el)
  }
}

customElements.get('ms-avatar') || customElements.define('ms-avatar', MSAvatar)

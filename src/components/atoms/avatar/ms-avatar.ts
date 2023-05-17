const styles = new CSSStyleSheet()
styles.replaceSync(`
:host {
    position: relative;
    display: inline-flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: #9679E4;
}
img {
  width: 100%;
  height: 100%;
  background-color: purple;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;
}
div {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  background-color: #ADABB3;
  font-family: 'Inter', Sans-Serif;
  color: #FFFFFF;
}
svg {
  position: absolute;
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

export class MSAvatar extends HTMLElement {
  private root: ShadowRoot

  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]
  }

  get image(): string | null {
    return this.getAttribute('image')
  }

  set image(img: string | null) {
    if (img) {
      this.setAttribute('image', img)
    } else {
      this.removeAttribute('image')
    }
  }

  get alt(): string | null {
    return this.getAttribute('alt')
  }

  set alt(alt: string | null) {
    if (alt) {
      this.setAttribute('alt', alt)
    } else {
      this.removeAttribute('alt')
    }
  }

  static get observedAttributes() {
    return ['image', 'alt']
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'image' && newValue !== oldValue) {
      this.image = newValue
    }
    if (name === 'fallback' && newValue !== oldValue) {
      this.alt = newValue
    }
    this.render()
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      const onNextEvent = new CustomEvent('on-next', {
        detail: { img: this.image, alt: this.alt },
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(onNextEvent)
    })

    this.render()
  }

  render() {
    this.root.innerHTML = ''
    if (this.image) {
      const img = document.createElement('img')
      img.src = this.image
      this.alt && (img.alt = this.alt)
      this.root.appendChild(img)
      return
    }
    if (this.alt) {
      const content = document.createElement('div')
      const match = this.alt.match(/(\w)\w*\s*(\w)?/)
      content.textContent = match ? match.slice(1).join('').toUpperCase() : ''
      this.root.appendChild(content)
      return
    }
    this.root.innerHTML = userSvg
  }
}

customElements.get('ms-avatar') || customElements.define('ms-avatar', MSAvatar)

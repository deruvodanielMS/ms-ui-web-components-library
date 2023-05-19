export const createStyled =
  (tagName: string, baseComponent: new () => HTMLElement) => (styles: any) => {
    const customStyles = new CSSStyleSheet()
    customStyles.replaceSync(styles)
    class StyledWebComponent extends baseComponent {
      constructor() {
        super()

        const shadowRoot = this.shadowRoot

        shadowRoot!.adoptedStyleSheets = [...shadowRoot!.adoptedStyleSheets, customStyles]
      }
    }

    customElements.define(tagName, StyledWebComponent)
    return StyledWebComponent
  }

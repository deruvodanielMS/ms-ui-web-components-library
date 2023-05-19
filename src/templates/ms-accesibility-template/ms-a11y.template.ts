const sheet = new CSSStyleSheet();
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
`);

const template = document.createElement('template');
template.innerHTML = `
  <button></button>
`;

export type MSA11yTemplateProps = {
    title: string;
    disabled: boolean;
    isSubmit: boolean;
}

export class MSA11yTemplate extends HTMLElement {
    private button: HTMLButtonElement | HTMLInputElement;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
      <style>:host {}</style>
    `;
        shadowRoot.adoptedStyleSheets = [sheet];
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.button = shadowRoot.querySelector('button')!;
        this.button.addEventListener('click', this.handleClick.bind(this));
    }

    connectedCallback() {
        this.updateButtonText(this.getAttribute('title') || '');
        this.updateButtonDisabled(this.getAttribute('disabled') || '');
        this.updateButtonType(this.getAttribute('isSubmit') || '');
    }

    static get observedAttributes(): (keyof MSA11yTemplateProps)[] {
        return ['title', 'disabled', 'isSubmit'];
    }

    attributeChangedCallback(
        name: keyof MSA11yTemplateProps,
        oldValue: string,
        newValue: string
    ) {
        if (name === 'title' && oldValue !== newValue) {
            this.updateButtonText(newValue);
        }
        if (name === 'disabled' && oldValue !== newValue) {
            this.updateButtonDisabled(newValue);
        }
        if (name === 'isSubmit' && oldValue !== newValue) {
            this.updateButtonType(newValue);
        }
    }

    updateButtonText(val: string) {
        this.button.innerText = val;
        this.button.setAttribute('aria-label', val);
    }

    updateButtonDisabled(val: string) {
        const isDisabled = !!val;
        this.button.disabled = isDisabled;
        if (isDisabled) {
            this.button.setAttribute('aria-disabled', 'true');
        } else {
            this.button.removeAttribute('aria-disabled');
        }
    }

    updateButtonType(val: string) {
        const isSubmit = !!val;
        if (isSubmit) {
            const input = document.createElement('input');
            input.type = 'submit';
            input.value = this.button.innerText;

            // Copiar atributos ARIA del botón original al nuevo input
            const ariaLabel = this.button.getAttribute('aria-label');
            const ariaDisabled = this.button.getAttribute('aria-disabled');
            if (ariaLabel) {
                input.setAttribute('aria-label', ariaLabel);
            }
            if (ariaDisabled) {
                input.setAttribute('aria-disabled', ariaDisabled);
            }

            this.button.replaceWith(input);
            this.button = input;
            this.button.addEventListener('click', this.handleClick.bind(this));
        } else {
            const button = document.createElement('button');
            button.innerText = this.button.innerText;

            // Copiar atributos ARIA del input original al nuevo botón
            const ariaLabel = this.button.getAttribute('aria-label');
            const ariaDisabled = this.button.getAttribute('aria-disabled');
            if (ariaLabel) {
                button.setAttribute('aria-label', ariaLabel);
            }
            if (ariaDisabled) {
                button.setAttribute('aria-disabled', ariaDisabled);
            }

            this.button.replaceWith(button);
            this.button = button;
            this.button.addEventListener('click', this.handleClick.bind(this));
        }
    }

    handleClick() {
        if (!this.button.disabled) {
            this.dispatchEvent(new Event('button-click'));
        }
    }

}

customElements.get('ms-a11y-template') ||
    customElements.define('ms-a11y-template', MSA11yTemplate);

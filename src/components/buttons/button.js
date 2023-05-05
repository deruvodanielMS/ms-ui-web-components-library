class MyButton extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const button = document.createElement('button');
      button.textContent = this.textContent;
      button.setAttribute('part', 'button');
  
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          border-radius: 6px;
          outline: none;
          font-family: sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        :host button:hover {
            opacity: 0.5;
            cursor: pointer;
          }
  
        :host([type="icon"]) button {
            background: #0ECC7E;
            border: none;
            border-radius: 6px;
        }
  
        :host([type="primary"]) button {
            background: #0ECC7E;
            border: none;
            border-radius: 6px;
            color: #fff;
        }

        :host([type="secondary"]) button {
            background: transparent;
            border: 2px solid #0ECC7E;
            color: #0ECC7E;
            border-radius: 6px;
        }
  
        :host([size="small"]) button {
          font-size: 14px;
          padding: 6px;
        }
  
        :host([size="medium"]) button {
          font-size: 20px;
          padding: 8px;
        }
  
        :host([size="large"]) button {
          font-size: 22px;
          padding: 12px;
        }

        :host([state="disabled"]) {
          pointer-events: none;
          opacity: 0.5;
        }
      `;
  
      shadow.appendChild(style);
      shadow.appendChild(button);
    }
  
    static get observedAttributes() {
      return ['type', 'size', 'state'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  
    render() {
        // Update the button's styles whenever the attributes change

        const button = this.shadowRoot.querySelector('button');
        
        button.setAttribute('type', this.getAttribute('type') || 'button');
        button.setAttribute('disabled', this.hasAttribute('state') && this.getAttribute('state') === 'disabled');
        button.classList.toggle('icon', this.getAttribute('type') === 'icon');
        
        const padding = {
          small: '6px',
          medium: '8px',
          large: '12px'
        }[this.getAttribute('size')] || '8px';
        
        button.style.fontSize = {
          small: '14px',
          medium: '20px',
          large: '22px'
        }[this.getAttribute('size')] || '20px';
        
        button.style.padding = padding;
      }
      
  }
  
  customElements.define('my-button', MyButton);
  
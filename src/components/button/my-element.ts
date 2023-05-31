import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { myElementStyles } from './my-element.styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [myElementStyles];

  /**
   * The name to say "Hello" to.
   */
  @property({ type: String })
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  /**
   * Whether to show the button as a submit button.
   */
  @property({ type: Boolean })
  isSubmit = false;

  private _onButtonKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this._onClick();
    }
  }

  render() {
    return html`
      <!-- Hello message -->
      <h1>Hello, ${this.name}!</h1>

      <!-- Button -->
      ${this.isSubmit
        ? html`
            <input type="button" @click=${this._onClick} @keydown=${this._onButtonKeyDown} part="button" value="Click Count: ${this.count}" />
          `
        : html`
            <button @click=${this._onClick} @keydown=${this._onButtonKeyDown} part="button" role="button" aria-label="Increment Count">
              Click Count: ${this.count}
            </button>
          `}

      <div id="dialog-description">Clicking this button will open a dialog to increment the count.</div>

      <!-- Slot content -->
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}

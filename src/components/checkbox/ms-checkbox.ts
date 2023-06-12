import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { msCheckboxStyles } from "./ms-checkbox.styles";

@customElement('ms-checkbox')
export class MSCheckbox extends LitElement {
    static styles = [msCheckboxStyles]

    @property({ type: String })
    title = '';

    @property({ type: String })
    description = '';

    @property({ type: Boolean })
    checked = false;

    @property({ type: Boolean })
    disabled = false;

    render() {
        return html`
         
            <input ?disabled=${this.disabled} type='checkbox' .checked=${this.checked} @change=${this.handleChange}/>
            <div>
                <label> ${this.title}</label>
                <span>${this.description}</span>
            </div>
           
        `
    }

    handleChange(event: Event) {
        const checkbox = event.target as HTMLInputElement;
        this.checked = checkbox.checked;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ms-checkbox': MSCheckbox
    }
}



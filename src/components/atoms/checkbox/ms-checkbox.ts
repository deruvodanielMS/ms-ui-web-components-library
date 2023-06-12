import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { WithTheme } from "~/mixins";

import { msCheckboxStyles } from "./ms-checkbox.styles";

@customElement('ms-checkbox')
export class MSCheckbox extends WithTheme(LitElement) {
    static styles = [msCheckboxStyles]

    @property({ type: Boolean })
    checked = false;

    @property({ type: Boolean })
    disabled = false;

    render() {
        return this.renderWithStyles(html`
         
        <input ?disabled=${this.disabled} type='checkbox' .checked=${this.checked} @change=${this.handleChange}/>
       
    `)
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



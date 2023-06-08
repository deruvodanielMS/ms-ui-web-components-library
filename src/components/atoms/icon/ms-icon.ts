import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('ms-icon')
export class MSIcon extends LitElement {
  // static styles = msIconStyles

  render() {
    return html`<div>
      <link rel="stylesheet" href="src/components/atoms/icon/style.css" />
      <div class="clearfix mhl ptl">
        <span class="icon icon-bike"
          ><span class="path1"></span><span class="path2"></span><span class="path3"></span
          ><span class="path4"></span><span class="path5"></span
        ></span>
      </div>
    </div>`
  }
}

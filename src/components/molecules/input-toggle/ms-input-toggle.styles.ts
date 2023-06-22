import { css } from 'lit'

//@TODO: modify styles with var on style-dictionary & theme

export const msInputToggleStyles = css`
  :host {
    display: flex;
    flex-direction: row;
  }
  div {
    display: flex;
    flex-direction: column;
    padding-left: 8px;
  }

  span {
    font-size: 15px;
    line-height: 24px;
  }

  label {
    color: #37363b;
    font-size: 17px;
    line-height: 24px;
  }
`

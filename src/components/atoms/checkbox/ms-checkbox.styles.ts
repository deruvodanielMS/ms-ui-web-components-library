import { css } from 'lit'

//@TODO: modify styles with var on style-dictionary & theme

export const msCheckboxStyles = css`
  :host {
    display: flex;
    flex-direction: row;
  }

  input[type='checkbox'] {
    margin-right: 8px;
    accent-color: #6237d7;
    width: 16px;
    height: 16px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input:hover {
    accent-color: #5932c3;
  }

  input:active {
    box-shadow: 0px 0px 0px 2px #ccc0f3;
  }

  input[type='checkbox']:disabled + div > * {
    color: #d9d8dc;
    cursor: not-allowed;
  }
`

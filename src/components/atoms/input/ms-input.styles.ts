import { css } from 'lit'

export const msInputStyles = css`
  :host {
    display: block;
    margin-bottom: 16px;
  }

  input {
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid #adabb3;
    border-radius: 6px;
    width: 100%;
    outline-color: #6237d7;
  }

  input[disabled] {
    background-color: #f2f1f3;
    cursor: not-allowed;
  }
  input::placeholder {
    color: #adabb3;
  }

  input[type='text'] {
    padding-left: 16px;
  }

  .success {
    border: 1px solid #058f48;
    outline-color: #058f48;
  }

  .error {
    border: 1px solid #ea1043;
    outline-color: #ea1043;
  }
`

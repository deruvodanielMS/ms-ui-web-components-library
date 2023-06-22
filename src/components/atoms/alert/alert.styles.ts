import { css } from 'lit'

import { setAlign, setFont } from '~/utils'

//@TODO: modify styles with var on style-dictionary & theme

export const msAlertStyles = css`
  :host {
    display: flex;
    height: 100vh;
    position: relative;
    width: 100%;
  }

  .snackbar-wrapper,
  .toast-wrapper {
    align-items: center;
    border-radius: 6px;
    display: flex;
    padding: 8px 16px;
    position: absolute;
    width: 100%;
  }

  :host > .snackbar-wrapper {
    justify-content: space-between;
  }

  :host button[role='button'] {
    border: none;
    background: none;
    padding: 0;
    font-size: 21px;
  }

  .error {
    background-color: #fde7ec;
    color: #d70f3e;
  }

  .error > button {
    color: #d70f3e;
  }

  .success {
    background-color: #e6f4ed;
    color: #058040;
  }

  .success > button {
    color: #058040;
  }

  .info {
    background-color: #e8eefd;
    color: #154dd1;
  }

  .info > button {
    color: #154dd1;
  }

  .warning {
    background-color: #fdf0e6;
    color: #d65d00;
  }

  .warning > button {
    color: #d65d00;
  }

  .body1 {
    ${setFont(17, 24)}
    font-weight: 700;
  }

  .body2 {
    ${setFont(15, 24)}
  }

  .toast-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 320px;
    gap: 8px 4px;
  }

  .toast-wrapper > .body2 {
    flex-basis: 100%;
  }

  .toast-wrapper > .icon {
    vertical-align: middle;
  }

  .top-left {
    ${setAlign('flex-start', 'flex-start')}
  }

  .top-center {
    ${setAlign('flex-start', 'center')}
  }

  .top-right {
    ${setAlign('flex-start', 'flex-end')}
  }

  .bottom-left {
    ${setAlign('flex-end', 'flex-start')}
  }

  .bottom-center {
    ${setAlign('flex-end', 'center')}
  }

  .bottom-right {
    ${setAlign('flex-end', 'flex-end')}
  }
`

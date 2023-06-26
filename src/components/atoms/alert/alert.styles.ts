import { css } from 'lit'

import { getThemeColor, setAlign, setFont } from '~/utils'

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
    width: -webkit-fill-available;
  }

  :host .snackbar-wrapper {
    justify-content: space-between;
  }

  :host button[role='button'] {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    font-size: 21px;
  }

  .error {
    background-color: ${getThemeColor('error-50-background')};
    color: ${getThemeColor('error-dark')};
  }

  .error > button {
    color: ${getThemeColor('error-dark')};
  }

  .success {
    background-color: ${getThemeColor('success-50-background')};
    color: ${getThemeColor('success-dark')};
  }

  .success > button {
    color: ${getThemeColor('success-dark')};
  }

  .info {
    background-color: ${getThemeColor('informative-50-background')};
    color: ${getThemeColor('informative-dark')};
  }

  .info > button {
    color: ${getThemeColor('informative-dark')};
  }

  .warning {
    background-color: ${getThemeColor('error-50-background')};
    color: ${getThemeColor('warning-dark')};
  }

  .warning > button {
    color: ${getThemeColor('warning-dark')};
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

  .hide {
    display: none;
  }
`

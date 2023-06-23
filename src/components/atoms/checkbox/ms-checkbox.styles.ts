import { css } from 'lit'

import { getThemeColor } from '~/utils'

//@TODO: modify styles with var on style-dictionary & theme

export const msCheckboxStyles = css`
  :host {
    display: flex;
    flex-direction: row;
  }

  input[type='checkbox'] {
    margin-right: 8px;
    accent-color: ${getThemeColor('admin-user-primary-main')};
    width: 16px;
    height: 16px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input:hover {
    accent-color: ${getThemeColor('admin-user-primary-dark')};
  }

  input:active {
    box-shadow: 0px 0px 0px 2px ${getThemeColor('light-primary-color')};
  }

  input[type='checkbox']:disabled + div > * {
    color: ${getThemeColor('gray-100')};
    cursor: not-allowed;
  }
`

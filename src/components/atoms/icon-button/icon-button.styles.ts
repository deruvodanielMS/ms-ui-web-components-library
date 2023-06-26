import { css } from 'lit'

import { getThemeColor } from '~/utils'

export const msIconButton = css`
  button {
    align-items: center;
    background: ${getThemeColor('regular-user-primary-main')};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 6px;
    width: 32px;
  }

  button.medium {
    height: 40px;
    padding: 10px;
    width: 40px;
  }

  button.large {
    height: 48px;
    padding: 12px;
    width: 48px;
  }

  button:hover {
    background: ${getThemeColor('regular-user-primary-dark')};
  }

  button:disabled {
    background: ${getThemeColor('gray-300')};
  }

  button.outlined {
    background: transparent;
    border: 1px solid ${getThemeColor('gray-300')};
    fill: ${getThemeColor('regular-user-primary-main')};
  }

  button.outlined:hover {
    fill: ${getThemeColor('regular-user-primary-dark')};
    border-color: ${getThemeColor('regular-user-primary-main')};
  }

  button:active:enabled,
  button.outlined:active:enabled {
    background: ${getThemeColor('regular-user-primary-main')};
    box-shadow: 0px 0px 0px 2px ${getThemeColor('regular-user-primary-main')};
    fill: ${getThemeColor('gray-white')};
  }

  button.outlined:disabled {
    background: transparent;
    border-color: ${getThemeColor('gray-300')};
    fill: ${getThemeColor('gray-300')};
  }
`

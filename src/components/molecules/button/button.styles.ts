import { css } from 'lit'

import { getThemeColor } from '~/utils'

// TODO: agregr los estilos del text
export const msButtonstyles = css`
  button {
    align-items: center;
    background: ${getThemeColor('regular-user-primary-main')};
    border-radius: 6px;
    border: none;
    color: ${getThemeColor('gray-white')};
    cursor: pointer;
    display: flex;
    gap: 8px;
    justify-content: center;
    min-height: 32px;
    min-width: 32px;
    padding: 6px;
    padding: 8px 12px;
  }

  button > svg {
    height: 12px;
    width: 12px;
  }

  button.medium {
    min-width: 40px;
    min-height: 40px;
    padding: 8px 16px;
  }

  button.medium > svg {
    height: 16px;
    width: 16px;
  }

  button.large {
    min-width: 48px;
    min-height: 48px;
    padding: 12px 20px;
  }

  button.large > svg {
    height: 20px;
    width: 20px;
  }

  button:hover {
    background: ${getThemeColor('regular-user-primary-dark')};
  }

  button:disabled {
    background: ${getThemeColor('gray-300')};
  }

  button.outlined,
  button.text {
    background: transparent;
    border: 1px solid ${getThemeColor('gray-300')};
    fill: ${getThemeColor('regular-user-primary-main')};
  }

  button.outlined:enabled,
  button.text:enabled {
    color: ${getThemeColor('regular-user-primary-main')};
    fill: ${getThemeColor('regular-user-primary-main')};
  }

  button.outlined:hover,
  button:active:enabled,
  button.outlined:active:enabled {
    border: none;
    background: ${getThemeColor('regular-user-primary-main')};
    box-shadow: 0px 0px 0px 2px ${getThemeColor('regular-user-primary-main')};
    color: ${getThemeColor('gray-white')};
    fill: ${getThemeColor('gray-white')};
  }

  button.outlined:disabled {
    background: transparent;
    border-color: ${getThemeColor('gray-300')};
    fill: ${getThemeColor('gray-300')};
  }

  button.text {
    border: none;
    padding: 0;
  }

  button.text:hover {
    color: ${getThemeColor('regular-user-primary-dark')};
    fill: ${getThemeColor('regular-user-primary-dark')};
  }

  button.text:disabled {
    color: ${getThemeColor('gray-300')};
    fill: ${getThemeColor('gray-300')};
  }

  button.text:active:enabled {
    background: none;
    box-shadow: none;
    color: ${getThemeColor('regular-user-primary-background')};
    fill: ${getThemeColor('regular-user-primary-background')};
  }

  *[slot='icon-left'] > *,
  *[slot='icon-right'] > * {
    /* vertical-align: middle; */
    background: red;
  }
`

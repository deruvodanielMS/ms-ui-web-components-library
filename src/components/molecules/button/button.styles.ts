import { css } from 'lit'

import { getThemeColor } from '~/utils'

// TODO: agregr los estilos del text
export const msButtonstyles = css`
  button {
    align-items: center;
    background: ${getThemeColor('regular-user-primary-main')};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 6px;
    font-weight: 600;
    padding: 8px 12px;
    color: ${getThemeColor('gray-white')};
    gap: 8px;
  }

  button.medium {
    padding: 8px 16px;
  }

  button.large {
    padding: 12px 20px;
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

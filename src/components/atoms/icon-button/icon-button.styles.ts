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
    padding: 0;
    width: 32px;
  }

  svg {
    fill: yellow;
  }
`

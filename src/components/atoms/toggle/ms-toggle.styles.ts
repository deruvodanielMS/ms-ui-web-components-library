import { css } from 'lit'

import { getThemeColor } from '~/utils'

//@TODO: modify styles with var on style-dictionary & theme

export const msToggleStyles = css`
  :host {
    display: inline-block;
  }
  span {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
    background-color: ${getThemeColor('gray-white')};
    border-radius: 8px;
    border: 1px solid ${getThemeColor('gray-700')};
    cursor: pointer;
    transition: background-color 0.4s;
  }

  span:hover {
    border-color: ${getThemeColor('primary-600-dark')};
  }

  span:active {
    box-shadow: 0px 0px 0px 2px ${getThemeColor('light-primary-color')};
  }

  span::after {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${getThemeColor('gray-700')};
    top: 1.5px;
    left: 1.5px;
    transition: all 0.4s;
  }

  span:hover::after {
    background-color: ${getThemeColor('primary-600-dark')};
  }

  input:checked + span::after {
    left: 16px;
    background-color: ${getThemeColor('gray-white')};
  }

  input:checked + span {
    background-color: ${getThemeColor('gray-900')};
    border-color: ${getThemeColor('gray-900')};
  }

  input:checked + span:hover {
    background-color: ${getThemeColor('primary-600-dark')};
    border-color: ${getThemeColor('primary-600-dark')};
  }

  input {
    display: none;
  }

  input[type='checkbox']:disabled + span {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

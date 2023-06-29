import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { iconNameAllowed } from '~/assets/icons'

import './button'
import { iconPositionsAllowed, sizesAllowed, variantAllowed } from './button.types'

export default {
  title: 'Button',
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      options: [undefined, ...iconNameAllowed],
      control: { type: 'select' },
    },
    iconPosition: {
      options: iconPositionsAllowed,
      control: { type: 'select' },
    },
    size: {
      options: sizesAllowed,
      control: { type: 'select' },
    },
    variant: {
      options: variantAllowed,
      control: { type: 'select' },
    },
    customIcon: {
      control: { type: 'boolean' },
    },
  },
  render: (args) =>
    html`
      <ms-button
        .disabled=${args.disabled}
        aria-label="label for button"
        .click=${args.handleClick}
        .variant=${args.variant}
        .size=${args.size}
        .customIcon=${args.customIcon}
        .icon=${args.icon}
        .iconPosition=${args.iconPosition}
      >
        <!-- This slot is an example for a usage for custom svg -->
        <span slot="custom-icon">
          <svg width="16" height="16" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.73483 2.73483C2.88128 2.58839 3.11872 2.58839 3.26517 2.73483L6 5.46967L8.73484 2.73483C8.88128 2.58839 9.11872 2.58839 9.26516 2.73483C9.41161 2.88128 9.41161 3.11872 9.26516 3.26517L6.53033 6L9.26516 8.73484C9.41161 8.88128 9.41161 9.11872 9.26516 9.26516C9.11872 9.41161 8.88128 9.41161 8.73484 9.26516L6 6.53033L3.26517 9.26516C3.11872 9.41161 2.88128 9.41161 2.73483 9.26516C2.58839 9.11872 2.58839 8.88128 2.73483 8.73484L5.46967 6L2.73483 3.26517C2.58839 3.11872 2.58839 2.88128 2.73483 2.73483Z"
            />
          </svg>
        </span>
        <!-- End -->

        <!-- This is an example for a usage with Text in the Button 
             If the usage that your looking for is an 'icon-button' approach, dont's send any text -->
        ${args.text}
        <!-- End -->
      </ms-button>
    `,
} as Meta

export const Button: StoryObj = {
  name: 'MSButton',
  args: {
    disabled: false,
    handleClick: () => alert('click'),
    variant: variantAllowed[0],
    size: sizesAllowed[0],
    customIcon: true,
    text: 'Button text',
    icon: 'none',
    iconPosition: iconPositionsAllowed[0],
  },
}

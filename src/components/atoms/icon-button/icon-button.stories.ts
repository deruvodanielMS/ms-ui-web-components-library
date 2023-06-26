import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { addIcon } from '~/assets/icons/add-icon'
import './icon-button'

export default {
  title: 'Icon Button',
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  render: (args) =>
    html`
      <ms-icon-button .disabled=${args.disabled}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill=${args.color}
        >
          ${addIcon()}
        </svg>
      </ms-icon-button>
    `,
} as Meta

export const IconButton: StoryObj = {
  name: 'MSIconButton',
  args: {
    disabled: false,
  },
}

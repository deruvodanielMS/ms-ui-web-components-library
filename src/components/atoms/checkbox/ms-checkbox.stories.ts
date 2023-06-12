import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-checkbox'

export default {
  title: 'Checkbox',
  argTypes: {
    onCheck: { action: 'onChange' },
  },
  render: (args) => html`
    <ms-checkbox .checked=${args.checked} @change=${args.onCheck} ?disabled=${args.disabled}
      >${args.label}</ms-checkbox
    >
  `,
} as Meta

export const Checkbox: StoryObj = {
  name: 'MSCheckbox',
  args: {
    checked: false,
    disabled: true,
  },
}

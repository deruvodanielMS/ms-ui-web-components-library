import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-input'

export default {
  title: 'Input',
  argTypes: {
    value: { defaultValue: '' },
    placeholder: { defaultValue: '' },
    disabled: { options: [true, false], control: { type: 'select' } },
    label: { defaultValue: 'Test' },
    message: { defaultValue: 'Informative message' },
    status: { options: ['error', 'success', ''], control: { type: 'select' } },
  },
  render: (args) =>
    html`<ms-input
      .value=${args.value}
      ?disabled=${args.disabled}
      .status=${args.status}
      placeholder=${args.placeholder}
      .label=${args.label}
      .message=${args.message}
    />`,
} as Meta

export const Input: StoryObj = {
  name: 'MSInput',
  args: {
    value: '',
    placeholder: 'Placeholder',
    label: 'Test',
    message: 'Informative message',
    status: '',
  },
}

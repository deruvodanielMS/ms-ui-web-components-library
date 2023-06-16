import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-input-toggle'

export default {
  title: 'Toggle',
  argTypes: {
    onCheck: { action: 'onChange' },
  },
  render: (args) => html`
    <ms-input-toggle .title=${args.title} .description=${args.description}
      >${args.label}</ms-input-toggle
    >
  `,
} as Meta

export const InputToggle: StoryObj = {
  name: 'MSInputToggle',
  args: {
    title: 'Title',
    description: 'Description',
  },
}

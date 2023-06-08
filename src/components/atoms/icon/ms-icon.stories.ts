import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-icon'

export default {
  title: 'MS icon',
  argTypes: {
    onOpen: { action: 'onClick' },
  },
  render: (_) => html`<ms-icon></ms-icon> `,
} as Meta

export const Default: StoryObj = {
  name: 'ms icon',
  args: {},
}

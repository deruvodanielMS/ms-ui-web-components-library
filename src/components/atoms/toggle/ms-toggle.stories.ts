import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-toggle'

export default {
  title: 'Toggle',
  argTypes: {
    onCheck: { action: 'onChange' },
  },
  render: (args) =>
    html`<ms-toggle
      .checked=${args.checked}
      @change=${args.onCheck}
      ?disabled=${args.disabled}
    ></ms-toggle>`,
} as Meta

export const Toogle: StoryObj = {
  name: 'MSToogle',
  args: {
    checked: false,
    disabled: false,
  },
}

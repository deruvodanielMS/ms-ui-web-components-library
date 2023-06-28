import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import '../typography'
import './ms-tag'

export default {
  title: 'Tag',
  component: 'ms-tag',
  render: ({ closable, slot }) => html`<ms-tag .closable=${closable}>${slot}</ms-tag>`,
} as Meta

export const Tag: StoryObj = {
  name: 'MSTag',
  args: {
    closable: true,
    slot: 'Label',
  },
}

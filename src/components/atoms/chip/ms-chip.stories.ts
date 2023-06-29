import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import '../typography'
import './ms-chip'

export default {
  title: 'Chip',
  component: 'ms-chip',
  render: ({ closable, slot }) => html`<ms-chip .closable=${closable}>${slot}</ms-chip>`,
} as Meta

export const Tag: StoryObj = {
  name: 'MSChip',
  args: {
    closable: true,
    slot: 'Label',
  },
}

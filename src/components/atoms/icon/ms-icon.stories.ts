import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ms-icon'

export default {
  title: 'MS icon',
  argTypes: {},
  render: (args) => {
    return html` <ms-icon .iconClass=${args.iconClass}> </ms-icon> `
  },
} as Meta

export const Default: StoryObj = {
  name: 'ms icon',
  args: {
    iconClass: 'fa-brands fa-tiktok',
  },
}

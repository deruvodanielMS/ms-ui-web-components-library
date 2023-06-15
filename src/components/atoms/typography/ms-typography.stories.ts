import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { typesAllowed } from './ms-typography'

export default {
  title: 'Typography',
  argTypes: {
    align: {
      options: ['inherit', 'center', 'left', 'right', 'justify'],
      control: { type: 'select' },
    },
    variant: {
      options: typesAllowed,
      control: { type: 'select' },
    },
    weight: {
      options: ['100', '400', '700'],
      control: { type: 'select' },
    },
  },
  render: (args) =>
    html`
      <ms-typography
        .align=${args.align}
        .variant=${args.variant}
        .color=${args.color}
        .weight=${args.weight}
      >
        ${args.slot}
      </ms-typography>
    `,
} as Meta

export const Checkbox: StoryObj = {
  name: 'MSTypography',
  args: {
    align: 'inherit',
    variant: 'h1',
    slot: 'Here a text as h1',
    color: 'red',
    weight: '400',
  },
}

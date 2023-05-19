import { withActions } from '@storybook/addon-actions/decorator'
import type { HtmlRenderer, Meta, StoryObj } from '@storybook/html'
import type { DecoratorFunction } from '@storybook/types'

import { MSAvatar } from './ms-avatar'

const template = (args: MSAvatar) => `<ms-avatar image="${args.image}" alt="${args.alt}" />`

const meta = {
  title: 'atoms/ms-avatar',
  component: new MSAvatar(),
  render: (args) => template(args),
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
  },
  decorators: [withActions as DecoratorFunction<HtmlRenderer>],
} satisfies Meta<MSAvatar>

export default meta

type Story = StoryObj<MSAvatar>

export const Default: Story = {
  args: {
    image: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg',
    alt: 'john doe',
  },
}

export const WithoutImage: Story = {
  args: { image: '', alt: 'john doe' },
}

export const Empty: Story = {
  args: { image: '', alt: '' },
}

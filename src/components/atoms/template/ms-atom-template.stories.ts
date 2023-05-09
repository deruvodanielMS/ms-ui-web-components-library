import { withActions } from '@storybook/addon-actions/decorator'
import type { HtmlRenderer, Meta, StoryObj } from '@storybook/html'
import { expect, jest } from '@storybook/jest'
import { fireEvent, userEvent, within } from '@storybook/testing-library'

import { DecoratorFunction } from '@storybook/types'
import type { MSAtomTemplateProps } from './ms-atom-template'
import { MSAtomTemplate } from './ms-atom-template'

const template = (args: MSAtomTemplateProps) =>
  `<ms-atom-template title="${args.title}" disabled="${args.disabled}" />`

const meta = {
  title: 'Examples/ms-atom-template',
  component: new MSAtomTemplate(),
  render: (args) => template(args),
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
  decorators: [withActions as DecoratorFunction<HtmlRenderer>],
} satisfies Meta<MSAtomTemplateProps>

export default meta

type Story = StoryObj<MSAtomTemplateProps>

export const Default: Story = {
  args: {
    title: 'text',
    disabled: true,
  },
}

export const ClickFunc: Story = {
  args: {
    title: 'test btn',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const actionButton = await canvas.getByTitle(/test btn/i)
    const mockedAction = jest.fn()

    actionButton.addEventListener('click', mockedAction)
    fireEvent.click(actionButton)

    expect(mockedAction).toBeCalled()
  },
}

export const HoverStyles: Story = {
  args: {
    title: 'test btn',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const actionButton = await canvas.getByTitle(/test btn/i)

    await userEvent.hover(actionButton)
    expect(actionButton).toHaveStyle({ backgroundColor: 'red' })
  },
}

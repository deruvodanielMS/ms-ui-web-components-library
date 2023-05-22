import { withActions } from '@storybook/addon-actions/decorator';
import type { HtmlRenderer, StoryObj } from '@storybook/html';
import { expect } from '@storybook/jest';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

import { DecoratorFunction } from '@storybook/types';
import type { MSA11yTemplateProps } from './ms-a11y.template';
import { MSA11yTemplate } from './ms-a11y.template';

const template = (args: MSA11yTemplateProps) =>
    `<ms-a11y-template title="${args.title}" disabled="${args.disabled}" is-submit="${args.isSubmit}" />`;

const meta = {
    title: 'Examples/ms-a11y-template',
    component: MSA11yTemplate,
    render: (args: MSA11yTemplateProps) => template(args),
    parameters: {
        actions: {
            handles: ['mouseover', 'click'],
        },
    },
    decorators: [withActions as DecoratorFunction<HtmlRenderer>],
};

export default meta;

type Story = StoryObj<MSA11yTemplateProps>;

export const Default: Story = {
    args: {
        title: 'text',
        disabled: true,
        isSubmit: false,
    },
};

export const ClickFunc: Story = {
    args: {
        title: 'test btn',
        isSubmit: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const actionButton = await canvas.getByTitle(/test btn/i);
        const mockedAction = jest.fn();

        actionButton.addEventListener('click', mockedAction);
        fireEvent.click(actionButton);

        expect(mockedAction).toBeCalled();
    },
};

export const HoverStyles: Story = {
    args: {
        title: 'test btn',
        isSubmit: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const actionButton = await canvas.getByTitle(/test btn/i);

        await userEvent.hover(actionButton);
        expect(actionButton).toHaveStyle({ backgroundColor: 'red' });
    },
};

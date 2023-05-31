import { Meta, StoryObj } from '@storybook/web-components';
import { html, unsafeCSS } from 'lit';
import themeOptions from '../../common/theme/base-theme';

import './my-element';

export default {
    title: 'My Element',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onOpen: { action: 'onClick' },
    },
    render: (args) => html`
        <my-element @click=${args.onOpen} name=${args.name} style=${`--my-element-color: ${args.color};`}></my-element>
    `,
} as Meta;

export const Default: StoryObj = {
    name: 'Default',
    args: {
        name: 'Lit',
        color: unsafeCSS(themeOptions.palette.error.light),
    },
};

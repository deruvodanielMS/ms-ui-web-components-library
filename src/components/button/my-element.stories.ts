import { Meta, StoryObj } from '@storybook/web-components';
import { html, unsafeCSS } from 'lit';
import themeOptions from '../../common/theme/base-theme';

import './my-element';

export default {
    title: 'My Element',
    argTypes: {
        onOpen: { action: 'onClick' },
    },
    render: (args) => html`
        <my-element @click=${args.onOpen} name=${args.name} style=${`--my-element-color: ${args.color}; --my-element-button-color: ${args.colorButton}; --my-element-background-color: ${args.colorBgButton};`}></my-element>
    `,
} as Meta;

export const Default: StoryObj = {
    name: 'Default',
    args: {
        name: 'Lit',
        color: unsafeCSS(themeOptions.palette.warning.dark),
        colorButton: unsafeCSS(themeOptions.palette.info.dark),
        colorBgButton: unsafeCSS(themeOptions.palette.lightBackground.primary),
    },
};
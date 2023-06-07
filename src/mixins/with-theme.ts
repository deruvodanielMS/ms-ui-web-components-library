import { consume } from '@lit-labs/context'
import { html, type LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'

import { msThemeContext, type MSTheme, type MSThemeManager } from '~/theme'
import { objToCssVars, truthyMerge } from '~/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T

export declare class WithThemeInterface {
  // @TODO: add all theme properties
  renderWithStyles(content: unknown): unknown
}

export const WithTheme = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithThemeElement extends superClass {
    @consume({ context: msThemeContext, subscribe: true })
    @state()
    tm?: MSThemeManager

    // Color properties
    @property({ type: String })
    'text-color'?: string

    @property({ type: String })
    'background-color'?: string

    @property({ type: String })
    'primary-color'?: string

    @property({ type: String })
    'secondary-color'?: string

    @property({ type: String })
    'accent-color'?: string

    @property({ type: String })
    'muted-color'?: string

    // Font properties
    @property({ type: String })
    'body-font'?: string

    // Font weight properties
    @property({ type: Number })
    'body-font-weight'?: number

    @property({ type: Number })
    'bold-font-weight'?: number

    // line height properties
    @property({ type: Number })
    'body-line-height'?: number

    private _addStyles() {
      const colors: Partial<MSTheme['colors']> = {
        ...(this['text-color'] && { text: this['text-color'] }),
        ...(this['background-color'] && { background: this['background-color'] }),
        ...(this['primary-color'] && { primary: this['primary-color'] }),
        ...(this['secondary-color'] && { secondary: this['secondary-color'] }),
        ...(this['accent-color'] && { accent: this['accent-color'] }),
        ...(this['muted-color'] && { muted: this['muted-color'] }),
      }

      const fonts: Partial<MSTheme['fonts']> = {
        ...(this['body-font'] && { body: this['body-font'] }),
      }

      const fontWeights: Partial<MSTheme['fontWeights']> = {
        ...(this['body-font-weight'] && { body: this['body-font-weight'] }),
        ...(this['bold-font-weight'] && { bold: this['bold-font-weight'] }),
      }

      const lineHeights: Partial<MSTheme['lineHeights']> = {
        ...(this['body-line-height'] && { body: this['body-line-height'] }),
      }

      let finalTheme

      if (this.tm) {
        finalTheme = truthyMerge(this.tm?.theme, { colors, fonts, fontWeights, lineHeights })
      } else {
        finalTheme = { colors, fonts, fontWeights, lineHeights }
      }

      const cssVars = objToCssVars(finalTheme)

      // @TODO: check if there is a way to use Constructable StyleSheets instead
      return cssVars
        ? html`<style>
            :host{${cssVars}}
          </style>`
        : ''
    }

    renderWithStyles(content: unknown) {
      return html`${this._addStyles()}${content}`
    }
  }
  return WithThemeElement as Constructor<WithThemeInterface> & T
}
